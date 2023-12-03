import React from "react";
import fhlogo from "../imgs/fhlogogreen.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="logocontainer">
        <img src={fhlogo}></img>
      </div>
      <ul>
        <li>
          <a className="navs">Home</a>
        </li>
        <li>
          <a className="navs">Projects</a>
        </li>
        <li>
          <a className="navs">Qualifications</a>
        </li>
      </ul>
      <div id="contactlink">
        <a>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
