import "./about.scss";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";


const About = () => {
  const phoneNumber = '4372553645';
  const email = 'jinalnpatel29@gmail.com'
  return (
    <>
      <div className="container about-page">
        <div className="text-zone-links">
        <div className="contact-icons">
        <Link to="https://www.linkedin.com/in/jinal-patel-747938143/" target="_blank" className="links-button">
        <FontAwesomeIcon className="pro-link" icon={faLinkedin} color="#0b66c2" />
        <p>Linkedin</p>
        </Link>
        <Link to="https://github.com/Jinal123456789" target="_blank" className="links-button">
        <FontAwesomeIcon className="pro-link" icon={faGithub} color="#1f2329" />
        <p>Github</p>
         
        </Link>
        <Link to="#" target="_blank" className="links-button">
        <FontAwesomeIcon className="pro-link" icon={faStackOverflow} color="#873e04" />
         <p>StackOverflow</p>
        </Link>
        </div>
        <div className="contact-me-detail">
        <Link to={`tel:${phoneNumber}`} className="flat-contact">
          <label class="font-call-number">Call / WhatsApp : </label>
          <label class="font-phone-number">4372553645</label>
        </Link>
        <Link to={`mailto:${email}`} className="flat-contact">
        <label class="font-email">Email me : </label>
        <label class="font-email-me">jinalnpatel29@gmail.com</label>
        </Link>
        </div>
        </div>
        <div className="resume-zone">
          <object
            data="http://africau.edu/images/default/sample.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        </div>
      </div>
    </>
  );
};

export default About;
