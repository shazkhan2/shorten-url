import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo-footer.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" className="logo" />
      <article>
        <h4>Features</h4>
        <ul>
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </article>
      <article>
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </article>
      <article>
        <h4>Company</h4>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </article>
      <div className="social-links">
        <a href="#facebook">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#twitter">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#pinterest">
          <img src={pinterest} alt="pinterest" />
        </a>
        <a href="#instagram">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
