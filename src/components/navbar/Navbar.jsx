import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <nav id="navbar">
      <ul className="links">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
