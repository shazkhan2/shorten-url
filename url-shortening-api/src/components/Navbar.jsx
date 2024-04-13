import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="header-left-section">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Resources">Resources</a>
          </li>
        </ul>
      </div>
      <ul className="header-right-section">
        <li>
          <a href="#Login">Login</a>
        </li>
        <li>
          <button className="primary-button">Sign Up</button>
        </li>
      </ul>
      <div className="hamburger-menu">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a href="#Features">Features</a>
          <a href="#Pricing">Pricing</a>
          <a href="#Resources">Resources</a>
          <a href="#Login">Login</a>
          <button className="primary-button">Sign Up</button>
        </div>
      )}
    </header>
  );
}
