import React from "react";
import { Helmet } from "react-helmet-async";
import BannerPages from '../../../images/message_admin.jpg';
import Card from "react-bootstrap/Card";
import Heading from "../../layout/headings/Heading";
import FormMessage from "../../admin/message/FormMessage";


function MessageAdmin() {
  return (
    <div className="container_page">
      <Helmet>
        <title>Message Admin | Holidaze!</title>
        <meta
          name="description"
          content="This page is for admin user to see the message from users"
        />
      </Helmet>

      <div className="banner_pages">
          <Card.Img src={ BannerPages } alt="Hero Image with Bergen city" />
      </div>

      <div className="main_container">
      <Heading title="Clients Messages"/>
		<section className="section_content_form">
            <FormMessage />
        </section>
        
    </div>
     
    </div>
  );
}

export default MessageAdmin;