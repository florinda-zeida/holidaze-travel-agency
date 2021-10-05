import React from 'react';
import { Link } from "react-router-dom"



function Footer() {
    return(
            <div className="footer">
            <Link className="link-footer brand_footer"  to="/"><h3>Holidaze Travel Agency</h3></Link>
            <div className ="footer-item">
                <div className ="footer_inner">
                    <p className ="footer-title">ADRESS</p>
                    <p>Eiksveien 70</p>
                    <p>5435 Bergen</p>
                    <p><b>E-mail:</b> post@holidaze.no</p>
                    <p><b>Phone:</b> +47 34 56 789</p>
                </div>
                <div className ="footer_inner">
                    <p className ="footer-title">LINKS</p>
                    <Link className="link-footer"  to="/">Home</Link>
                    <Link className="link-footer"  to="/accommodations">Accommodations</Link>
                    <Link className="link-footer"  to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className ="copyright">
                <p>© 2021 Design and development by Florinda Zeida</p>
            </div>
            </div>
    )
}

export default Footer; 
