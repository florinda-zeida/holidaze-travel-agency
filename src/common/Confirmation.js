import { Link } from "react-router-dom";



export default function Confirmation(){
    return(

       <div className="main_container">
          <section className="section_content_form">
              <div className="confirmation">
                    <h2>Hey, Thank you</h2>
                    <h5>Your information has been submitted!</h5>
                    <p>We will respond to your within one (1) business day..</p>
                <hr />
                    <Link className="button"  to="/">Return  home</Link>
              </div>
          </section>

        </div>
      
    )
}



