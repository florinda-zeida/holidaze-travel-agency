import React from "react";
import { Helmet } from "react-helmet-async";
import BannerPages from '../../../images/booking_enquire.jpg';
import FormEnquire from "../enquire/FormEnquires";
import Card from "react-bootstrap/Card";
import Heading from "../../layout/headings/Heading";
import { useLocation } from "react-router-dom";

function Enquire() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  return (
    <div className="container_page">
      <Helmet>
        <title>Enquire/Booking | Holidaze</title>
        <meta
          name="description"
          content="Make a reservation to our accommodation"
        />
      </Helmet>

      <div className="banner_pages">
        <Card.Img src={BannerPages} alt="Hero Image with Bergen city" />
      </div>

      <div className="main_container">
        <Heading title={query.get("accomodation")} />
        <section className="section_content_form">
          <FormEnquire />
        </section>
      </div>
    </div>
  );
}

export default Enquire;


