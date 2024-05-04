import React from "react";
import "./navbarMobile.scss";

function NavbarMobile() {
    return (
      <nav className="navbar">
        <ul className="navbar_list">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
  export default NavbarMobile;