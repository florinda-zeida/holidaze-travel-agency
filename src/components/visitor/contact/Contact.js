import React from "react";
import { Helmet } from "react-helmet-async";
import BannerPages from '../../../images/contact.jpg';
import FormContact from "../contact/FormContact";
import Card from "react-bootstrap/Card";
import Heading from "../../layout/headings/Heading";


function Contact() {
  return (
    <div className="container_page">
      <Helmet>
        <title>Contact | Holidaze</title>
        <meta
          name="description"
          content="To get help from our support specialists, contact us and let us know more about what you need."
        />
      </Helmet>

      <div className="banner_pages">
          <Card.Img src={ BannerPages } alt="Hero Image with Bergen city" />
      </div>

      <div className="main_container">
                  <Heading title="Contact us"/>
                  <p className="paragraf_style paragraf-intro-pages">
                  Send us a message and we will take the time to get to know you so we can help you find your amazing luxury holiday.</p>
									<section className="section_content_form">
                  <FormContact />
                	</section>
        
      					</div>
     
    </div>
  );
}

export default Contact;


