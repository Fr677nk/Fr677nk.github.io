import React, { useEffect, useState } from "react";
import { arrowLeft, arrowRight } from "../vectors/svgs";
import bjpic from "../imgs/blackjack.jpg";
import "../styles/projects.css";

const projects = [
  { name: "project1", link: null, img: bjpic },
  { name: "project2", link: null, img: bjpic },
  { name: "project3", link: null, img: bjpic },
  //   { name: "project4", link: null, img: null },
  //   { name: "project5", link: null, img: null },
];

const Projects = () => {
  const [currProj, setCurrProj] = useState(0);
  let prevproj;
  let nextproj;
  currProj == projects.length - 1 ? (nextproj = 0) : (nextproj = currProj + 1);
  currProj == 0 ? (prevproj = projects.length - 1) : (prevproj = currProj - 1);
  useEffect(() => {
    currProj == projects.length ? (nextproj = 0) : (nextproj = currProj + 1);
    currProj == 0
      ? (prevproj = projects.length - 1)
      : (prevproj = currProj - 1);
  }, [currProj]);

  let disablebtn = false;
  const handleRightBtn = () => {
    if (!disablebtn) {
      disablebtn = true;
      document.getElementById("carouselleft").classList.add("slideleft");
      document.getElementById("carouselmiddle").classList.add("slideleft");
      document.getElementById("carouselright").classList.add("slideleft");
      document.getElementById("carouselright2").classList.add("slideleft");

      setTimeout(() => {
        document.getElementById("carouselmiddle").classList.remove("slideleft");
        document.getElementById("carouselright").classList.remove("slideleft");
        document.getElementById("carouselleft").classList.remove("slideleft");
        document.getElementById("carouselright2").classList.remove("slideleft");
        currProj == projects.length - 1
          ? setCurrProj(0)
          : setCurrProj((prev) => prev + 1);
        disablebtn = false;
      }, 1000);
    }
  };
  const handleLeftBtn = () => {
    if (!disablebtn) {
      disablebtn = true;
      document.getElementById("carouselleft").classList.add("slideright");
      document.getElementById("carouselmiddle").classList.add("slideright");
      document.getElementById("carouselright").classList.add("slideright");
      document.getElementById("carouselleft2").classList.add("slideright");

      setTimeout(() => {
        document.getElementById("carouselmiddle").classList.remove("slideright");
        document.getElementById("carouselright").classList.remove("slideright");
        document.getElementById("carouselleft").classList.remove("slideright");
        document.getElementById("carouselleft2").classList.remove("slideright");
        currProj == 0
          ? setCurrProj(projects.length - 1)
          : setCurrProj((prev) => prev - 1);
        disablebtn = false;
      }, 1000);
    }
  };

  let projectsList = projects.map((item) => (
    <div className="projectlistitem">
      <img src={item.img} />
      <p>{item.name}</p>
    </div>
  ));
  return (
    <div id="projectscontainer">
      <p>Projects ive worked on</p>
      <div id="projects">
        <button className="arrowbtn" id="leftbtn" onClick={handleLeftBtn}>
          {arrowLeft}
        </button>
        <div id="carouselcontainer">
          <div id="carouselleft2"></div>
          <div id="carouselleft">{projectsList[prevproj]}</div>
          <div id="carouselmiddle">{projectsList[currProj]}</div>
          <div id="carouselright">{projectsList[nextproj]}</div>
          <div id="carouselright2"></div>
        </div>
        <button className="arrowbtn" id="rightbtn" onClick={handleRightBtn}>
          {arrowRight}
        </button>
      </div>
    </div>
  );
};

export default Projects;
