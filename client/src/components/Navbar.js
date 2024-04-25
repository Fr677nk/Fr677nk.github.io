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
          <a className="navs" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="navs" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="navs" href="#skillspanel">
            Qualifications
          </a>
        </li>
      </ul>
      <a href="#contactcontainer">
        <div id="contactlink">Contact</div>
      </a>
    </nav>
  );
};

export default Navbar;
