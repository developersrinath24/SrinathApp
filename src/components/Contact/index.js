import React from "react";
import { facebook, gmail, instagram, linkedin, github } from "./social";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text">
        <h2>Let's get in touch</h2>
      </div>
      <div className="gmail-btn">
        <a href="mailto:srinath.unta@gmail.com">
          <img src={gmail} width="20px" />
          srinath.unta@gmail.com
        </a>
      </div>
      <div className="social-media">
        <ul>
          <li className="sm-icon">
            <a href="#">
              <img src={github} width="50" />
            </a>
            <p className="icon-text">github</p>
          </li>
          <li className="sm-icon">
            <a href="#">
              <img src={linkedin} width="50" />
            </a>
            <p className="icon-text">linkedin</p>
          </li>
          <li className="sm-icon">
            <a href="#">
              <img src={facebook} width="50" />
            </a>
            <p className="icon-text">facebook</p>
          </li>
          <li className="sm-icon">
            <a href="#">
              <img src={instagram} width="50" />
            </a>
            <p className="icon-text">instagram</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
