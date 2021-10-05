import React from "react";
import { Helmet } from "react-helmet-async";
import BannerPages from '../../../images/add_accommodation.jpg';
import Heading from "../../layout/headings/Heading";
import AddAccommodationForm from "../../admin/edit/AddAccommodationForm";
import Card from "react-bootstrap/Card";


function AddAccommodation() {
  return (
    <div className="container_page">
      <Helmet>
        <title>Add Accommodations | Holidaze!</title>
        <meta
          name="description"
          content="The page is for admin users to add a accommodations"
        />
      </Helmet>

      <div className="banner_pages">
          <Card.Img src={ BannerPages } alt="Hero Image with Bergen city" />
      </div>

      <div className="main_container">
                  <Heading title="Add accommodation"/>
									<section className="section_content_form">
                  <AddAccommodationForm />
                	</section>
        
      					</div>
     
    </div>
  );
}

export default AddAccommodation;