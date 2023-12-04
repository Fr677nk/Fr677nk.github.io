import React from "react";
import "../styles/skills.css";
import jslogo from "../imgs/JavaScript-logo.png";
import csslogo from "../imgs/csslogo.png";
import {
  htmlVector,
  jsLogoVector,
  cssLogoVector,
  reactLogoVector,
  cLogoVector,
} from "../vectors/svgs";

const Skills = () => {
  return (
    <div id="skillspanel">
      <p>Skills</p>
      <div id="verticalseparator">
        <div id="languageiconscontainer">
          <div id="languageicons">
            {jsLogoVector}
            {cssLogoVector}
            {htmlVector}
            {reactLogoVector}
            {cLogoVector}
          </div>
        </div>
        <div id="skillstext">
            <div>
                <h2>adaptability</h2>
                <p>sdsfsfdsfdsfsdfsdfsdfsdfsfsdfsdfdfs</p>
            </div>
            <div>
                <h2>adaptability</h2>
                <p>sdsfsfdsfdsfsdfsdfsdfsdfsfsdfsdfdfs</p>
            </div>
            <div>
                <h2>adaptability</h2>
                <p>sdsfsfdsfdsfsdfsdfsdfsdfsfsdfsdfdfs</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
