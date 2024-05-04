import React from "react";
import "./navbar.scss";
import logo from "../assets/logo_maori.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Event</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="log">
        <p>Se connecter</p>

      </div>
    </nav>
  );
}

export default Navbar;
