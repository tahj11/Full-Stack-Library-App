import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">Pdf books</a>
              </li>
              <li>
                <a href="#">fiction books</a>
              </li>
              <li>
                <a href="#">non-fiction books</a>
              </li>
              <li>
                <a href="#">research books</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
