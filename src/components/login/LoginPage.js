
import React from "react";
import { Helmet } from "react-helmet-async";
import Card from 'react-bootstrap/Card';
import BannerPages from '../../images/login.jpg';
import LoginForm from "../../components/login/LoginForm";
import Heading from "../../components/layout/headings/Heading";

export default function LoginPage() {
	return (
		<div className="container_page">
			<Helmet>
						<title>Holidaze Travel Agency</title>
						<meta name="description" content="Contact page Holidaze Travel Agency"/>
						<meta name="keywords" content="contact , holidaze"/>
			</Helmet>
		
			<div className="banner_pages">
       <Card.Img src={ BannerPages } alt="Hero Image with Bergen city" />
       </div>
                <div className="main_container">
								<Heading title="Log In To Admin Page"/>
								<p className="paragraf_style paragraf-intro-pages">
								The log is for hotel owners to be able to manage the locations.</p>
									<section className="section_content_form form-login">
										<LoginForm />
                	</section>
        
      					</div>
			</div>

	);
}