import React from 'react';
import { Link } from "react-router-dom";

export default function Header(props) {
  const { openMenu } = props
  return (
    <header className="header">
      <div className="brand">
        <button id="hamburger" onClick={openMenu}>
          &#9776;
      </button>
        <Link to="/">Rafezon</Link>
        {/* <a href="index.html"> Rafezon </a> */}
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
  )
}
