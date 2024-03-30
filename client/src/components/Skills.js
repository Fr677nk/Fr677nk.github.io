import { React, useEffect, useRef, useState } from "react";
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
  const [isVisable, setIsVisable] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIsVisable(entry[0].isIntersecting);
      },
      { rootMargin: "300px", threshold: 1 }
    );
    observer.observe(ref.current);
  }, []);


  return (
    <div id="skillspanel" >
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
        <div id="skillstext" ref={ref}>
          <div>
            <h2>adaptability</h2>
            <p>In a world that is ever evolving, adaptability is key to staying on top. 
            </p>
          </div>
          <div>
            <h2>Problem solving</h2>
            <p>The ability to tackle challenges head-on is one of the most useful skills in any environment.

            </p>
          </div>
          <div>
            <h2>Communication</h2>
            <p>I seek to create connections with others, and to find synergy with the people that surround me.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
