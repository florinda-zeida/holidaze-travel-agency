import React from "react";
import { Helmet } from "react-helmet-async";
import BannerPages from "../../../images/booking_enquire.jpg";
import Card from "react-bootstrap/Card";
import Heading from "../../layout/headings/Heading";
import FormEnquire from "../enquires/FormEnquire";


function Enquire() {
  return (
    <div className="container_page">
      <Helmet>
        <title>Dashboard Admin | Holidaze!</title>
        <meta
          name="description"
          content="This page is dashboard for admin user to see the enquire from users"
        />
      </Helmet>

      <div className="banner_pages">
          <Card.Img src={ BannerPages } alt="Hero Image with Bergen city" />
      </div>

     
      <div className="main_container">
								<Heading title="Clients Booking Enquires"/>
		    <section className="section_content_dashboard">
            <FormEnquire />
        </section>
        
    </div>
     
    </div>
  );
}

export default Enquire;