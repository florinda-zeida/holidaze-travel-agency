import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../../../../constants/Api";
import { Link } from 'react-router-dom';
import StarStyle from "../../../layout/star/StarStyle";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Loading from "../../../../common/Loading";

const urlAccommodations = BASE_URL;

const DetailAccommodation = () => {
	const [accommodation, setAccommodation] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  const { id } = useParams();
  
  const enquireUrl = `/enquire?accomodation=${accommodation.title}`;

	const url = urlAccommodations + `/accommodations/${id}`;

	useEffect(function () {
		async function getAccommodation() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setAccommodation(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getAccommodation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	// const { data: accommodation, error, isLoading } = useFetch(urlDetail + id);

	if (loading) return <Loading />
  
	if (error) return <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {error}</Alert>;

	return ( 

    <div className="container_page">

		  <Helmet>
			  <title>{accommodation.metaTitle }</title>
			  <meta name="description" content={accommodation.metaDescription} />
			  <meta name="keywords" content={accommodation.keywords} />
      </Helmet>

      <div className="accommodation_detail" key={accommodation.id}>
        <div className="banner_pages">
          <Card.Img variant="top" src={accommodation.image.url } alt={accommodation.alt } />
        </div>
      <div className="main_container">

      <Card className="accommodation_card_detail">

        <Card.Body className="card_detail_flex">

        <div className="flex_column ina">
		        <div className="accommodation_title_flex">
                <Card.Text className="accommodation_title">{accommodation.title}</Card.Text>
                <div className="accommodation_star"><StarStyle /></div>
            </div>

            <Card.Text className="accommodation_sub-title">{accommodation.subTitle}</Card.Text>
        </div>

            <Link className="button btn_card" to={enquireUrl}>Book now</Link>
         </Card.Body>



         
         <hr />

         <Card.Body className="card_detail_flex">
              <Card.Text className="accommodation_location">
        {accommodation.location}
              </Card.Text>
              <Card.Text className="accommodation_price">
         <b>{accommodation.price}$</b> <span>per night</span>
              </Card.Text>
         </Card.Body>

         <hr />

         <Card.Body className="flex_column">

         <Card.Text className="accommodation_info"><b>More Info:</b></Card.Text>

				 <p className="accommodation_info" dangerouslySetInnerHTML={{ __html: accommodation.description }} />
         </Card.Body>

         <hr />

         <Card.Body className="flex_column">
         <Card.Text className="accommodation_info"><b>Amenities:</b></Card.Text>
          <Card.Text className="accommodation_info">
        {accommodation.amenities}
          </Card.Text>
         </Card.Body>

         <hr />
     
    </Card>
		</div>
			</div>
      </div>
      
	);
};

export default DetailAccommodation;






