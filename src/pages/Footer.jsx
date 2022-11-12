import React from "react";
import "../elements/Footer.css";
//import { Link } from "react-router-dom";
import navlogo from "../assets/images/navlogo.png";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="row">
        <div className="col">
          <img src={navlogo} alt="" className="logo" />
        </div>
        <div className="col">
          <h3>
            Location{" "}
            <div className="underline">
              <span />
            </div>
          </h3>
          <p>Accra</p>
          <p>Some Building</p>
          <p>4th Floor</p>
          <p className="email-id">email@email.com</p>
          <h4>+233 589 679 5798</h4>
        </div>
        <div className="col">
          <h3>
            Services{" "}
            <div className="underline">
              <span />
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/">Promotions</a>
            </li>
            <li>
              <a href="/">Wish List</a>
            </li>
            <li>
              <a href="/">Terms & Condition</a>
            </li>
            <li>
              <a href="/">Faq's</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter{" "}
            <div className="underline">
              <span />
            </div>
          </h3>
          <form>
            <i className="far fa-envelope" />
            <input type="email" placeholder="Enter your email" />
            <button type="submit">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-whatsapp" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Cvmpell Ltd © 2022 - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
