import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import BannerPages from '../../../images/accommodations-page.jpg';
import Card from "react-bootstrap/Card";
import StarStyle from "../../layout/star/StarStyle";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { BASE_URL, PAGE_PATH} from "../../../constants/Api";
import Loading from "../../../common/Loading";
import Alert from "react-bootstrap/Alert";




const urlAccommodations = BASE_URL + PAGE_PATH;

const Accommodations = () => {

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [counter, setCounter] = useState(0);
  const [filtered, setFiltered] = useState('');

  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    setFiltered(value);
    let result = [];
    console.log(value, allData, filteredData);

    result = allData.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setCounter(result.length);
    setFilteredData(result);
  };

  useEffect(() => {
  
    async function getAccommodations() {
      try {
        const response = await axios.get(urlAccommodations);
        setAllData(response.data);
        setFilteredData(response.data);

      } catch (error) {
        console.log(error);
        setServerError(error.toString());

      } finally {
        setLoading(false);
      }
    }

    getAccommodations();
  }, []);

  if (loading){
    return  <Loading />
    }
  

	if (serverError) {
    return   <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {serverError}</Alert>;
  }

    return (
      <div className="container_page">
      <Helmet>
              <title>Accommodations Bergen Holidaze</title>
              <meta
              name="description"
              content="Find and book hotels, B&Bs and guesthouses in Bergen"
              />
              <meta
              name="keywords"
              content="Accommodations, Hotels, Bergen, Room, Hotel Bergen, Guesthouses, B&Bs"
              />
        </Helmet>
     
     
        <div className="banner_pages">
        <Card.Img src={ BannerPages } alt="Hero Image with for accommodations page" />
        </div>


        <div className="main_container">

        <section className="section_content_search">
        <Form className="d-flex search_accommodation">
          <FormControl
            type="search"
            placeholder="Search accommodation..."
            className="search"
            aria-label="Search"
            onChange={(event) => handleSearch(event)}
          />
        </Form>
        </section>

        {filtered.length !== 0 && <div className="result-search">Number of accommodations: {counter}</div>}
       
        <div className="flex-group">

          {filteredData.map((accommodations) => (
            <Card className="accommodation_card" key={accommodations.id}>

              <Card.Img variant="top" src={accommodations.image.url} alt="" />

              <Card.Body className="accommodation_body">
              <div className="accommodation_title_flex">
              <Card.Text className="accommodation_title">{accommodations.title}</Card.Text>
              <div className="accommodation_star"><StarStyle /></div>
              </div>
              <Card.Text className="accommodation_location">
              {accommodations.location}
              </Card.Text>
              <Card.Text className="accommodation_price">
              Price:<b>{accommodations.price}$</b> <span>per night</span>
              </Card.Text>
              </Card.Body>

              <Card.Footer className="accommodation_footer">
                <Link className="button btn_card" to={`/detail/${accommodations.id}`}>
                  View more
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </div>
        </div>
    </div>
    );
  };
  
  export default Accommodations ;
  