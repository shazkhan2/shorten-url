import React from 'react'
import logo from "../images/logo.svg"
export default function Navbar() {
  return (
    <>
<header className='header'>

    <div>

        <img src = {logo} alt = "Logo" />
<nav>
    <ul>
        <li>Features  </li>
        <li>Prices  </li>
        <li>Resources  </li>
    </ul>

</nav>

    </div>
    <ul>
        <li>Login</li>
        <li>Sign Up</li>
    </ul>

</header>
  </>
  )
}
