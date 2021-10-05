import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Banner from '../../../images/hero_img.jpg';
import { Link } from "react-router-dom";


function HeroImage() {
  return(
  
      <div className="hero_index">

      <Card.Img src={ Banner } alt="Hero Image with Bergen city" />
         <Card.ImgOverlay className="hero_img-overlay">
         <Card.Title className="hero_title">Are you ready for Bergen?</Card.Title>
         <Card.Text className="hero_sub-title">Find and book hotels, B&Bs and guesthouses</Card.Text>
           <Link to={`/accommodations`}>
           <Button className=" button btn-hero">View accommodations</Button>
           </Link>
         </Card.ImgOverlay>

   </div>
    
  )
}

export default HeroImage;