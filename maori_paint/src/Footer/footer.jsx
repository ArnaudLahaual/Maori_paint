import React from "react";
import "./footer.scss";
import logo from "../assets/logo-white-1024x728.png";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer_left">
        <p>
          Basée en France région Parisienne<br />
          92600 Asnières sur Seine<br />
          +33 6 87 07 75 24<br />
          contact@maorioverstreet.com
        </p>
      </div>
      <div className="footer_center">
      <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </div>
      <div className="footer_right">
        <p>
          Informations légales<br />
          Mentions légales<br />
          Conditions Générales
        </p>
      </div>
    </nav>
  );
}

export default Footer;
