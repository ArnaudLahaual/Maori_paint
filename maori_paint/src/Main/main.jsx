import React from "react";
import "./main.scss";
import logo from "../assets/SAIGON-540x540-1.jpg";

function Main() {
  return (
    <div className="main-content">
      <h1>MAORI OVERSTREET</h1>
      <img src={logo} alt="Logo" className="logo" />
      <p>Bio</p>
    </div>
  );
}

export default Main;
