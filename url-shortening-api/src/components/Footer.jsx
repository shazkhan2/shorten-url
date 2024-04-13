import React from 'react';
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo-footer.svg";

function Footer() {
  return (
    <footer>
      <div>
        <article>
          <img src={logo} alt="logo" />
        </article>
      </div>
      <article>
        <h3>
          Features
        </h3>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </article>
      <article>
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Analytics</li>
        </ul>
      </article>
      <article>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </article>
      <article>
        <ul>
          <li><img src={facebook} alt="facebook" /></li>
          <li><img src={twitter} alt="twitter" /></li>
          <li><img src={pinterest} alt="pinterest" /></li>
          <li><img src={instagram} alt="instagram" /></li>
        </ul>
      </article>
    </footer>
  )
}

export default Footer;
