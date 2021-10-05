import React from "react";
import HeroImage from "../home/HeroImage";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BergenImg from '../../../images/bergen_city.jpg';
import StegasteinImg from '../../../images/stegastein.jpg';
import DropdownSearch from "../home/DropdownSearch";



export default function HomePage() {

  return (
   
    <div className="container_page">

    <div className="hero_index">
        <HeroImage />
   </div>

   <div className="main_index">

    <section className="section_dropdown">
    <h3>Find an accommodation</h3>
         <DropdownSearch />
    </section>

    <section className="section_vision">
  
        <div><p className="paragraf_style">
         <em>Holidaze is a travel agency in Bergen Norway.
        Our mission is to provide customers with the most beautiful hotels, B & Bs and guesthouses, to offer quality services in the field of domestic tourism, based on professionalism and experience gained in the last 5 years.
        We are committed to making each experience unique, providing all the necessary information.
        We draw journeys and smiles, which turn into unforgettable experiences!</em>
        </p><div className ="special_font">Holidaze Team</div></div>
    </section>

    <div className="section_visit_bergen">

    <CardGroup className="visit-bergen_group">
      <Card className="visit-bergen_card">
           <Card.Img src={ BergenImg } alt="Image with Bergen City" />
           <Card.Body className="visit-bergen_body">
          <Card.Title className="visit-bergen_title">Explore Bergen City</Card.Title>
          <Card.Text className="visit-bergen_description">
          Learn why many consider Bergen the most beautiful city in Norway. Explore charming wooden streets and historic sights.
          </Card.Text>
          </Card.Body>
        <Card.Footer className="visit-bergen_footer">
          <Button className= "button btn-card" href="https://en.visitbergen.com/things-to-do/sightseeing" target="_blank">View More</Button>
        </Card.Footer>
      </Card>

      <Card className="visit-bergen_card">
      <Card.Img src={ StegasteinImg } alt="Image with Stegastein view"/>
      <Card.Body className="visit-bergen_body">
     <Card.Title className="visit-bergen_title">Stegastein Viewpoint </Card.Title>
     <Card.Text className="visit-bergen_description">
     You may have heard of Stegastein, but do not know exactly what it is or where it is? Stegastein is a vantage point located on top of Aurlandsfjellet between Flåm and Aurland.
     </Card.Text>
     </Card.Body>
   <Card.Footer className="visit-bergen_footer">
   <Button className= "button btn-visit-bergen" href="https://en.visitbergen.com/things-to-do/flam" target="_blank">View More</Button>
   </Card.Footer>
 </Card>
 
</CardGroup>
</div>

   
</div>
 </div>

  );
}



