import { faFacebook, faLinkedin,faTwitter,faInstagram, faStackOverflow,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="container-fluid">
    <div className="row mt-5 p-3 bg-success">
      <div className="col-md-4 p-4 ms-md-5">
        <h4 className="text-light"> <FontAwesomeIcon icon={faStackOverflow} className="me-2 fs-2" />Project Fair </h4>

        <p style={{ textAlign: "justify" }} className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          placeat numquam molestias minus eos error omnis nobis similique?
          Ratione similique quam enim deserunt placeat natus amet quidem quis
          asperiores odit.
        </p>
      </div>
      <div className="col-md-2 p-4 justify-content-center d-md-flex">
        <div>
          <h4 className="text-light">Links</h4>
          
          <p className="mt-4" > <Link to={'/'} style={{color:'black'}}
          
            >Home Page</Link>
          </p>
          <p className="mt-4" > <Link to={'/project'} style={{color:'black'}}
          
          >Project Page</Link>
        </p>

        <p className="mt-4" > <Link to={'/dashboard'} style={{color:'black'}}
          
          >DashBoard</Link>
        </p>
        </div>
      </div>

      <div className="col-md-2 p-4">
        <h4 className="text-light">Guides</h4>
        <p className="mt-4">React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>

      <div className="col-md-3 p-4">
        <h4 className="text-light">Contact Us</h4>
        <div className="d-flex mt-4">
          <input type="text" className="form-control" placeholder="Email id" />
          <button className="btn btn-warning ms-3">Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between text-light">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    </div>
  )
}

export default Footer;

