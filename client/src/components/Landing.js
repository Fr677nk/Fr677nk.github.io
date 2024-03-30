import React from "react";
import "../styles/landing.css";
import LaptopScreen from "./LaptopScreen";
import { githubVector, linkedinVector } from "../vectors/svgs";

const Landing = () => {
  return (
    <div id="landing">
      <LaptopScreen />
      <div id="links">
        <a href="https://github.com/Fr677nk">
          <div id="github" className="circleLink">
            {githubVector}
          </div>
        </a>
        <a href="https://www.linkedin.com/in/francis-joseph-houck-2805a9255/">
          <div
            id="linkedIn"
            className="circleLink"
            onClick={() => {
              window.location.assign("www.google.com");
            }}
          >
            {linkedinVector}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
