import React, { useState } from 'react';
import logo from "../images/logo.svg";

export default function Navbar() {
  // State to track whether the menu is visible or not
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header className='header'>
        <div>
          <img src={logo} alt="Logo" />
          <nav style={{ display: menuVisible ? 'block' : 'none' }}>
            <ul>
              <li>Features</li>
              <li>Prices</li>
              <li>Resources</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </nav>
        </div>
        <button onClick={toggleMenu}>Menu</button>
      </header>
    </>
  );
}
