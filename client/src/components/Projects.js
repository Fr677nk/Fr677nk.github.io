import React, { useEffect, useState, useRef } from "react";
import { arrowLeft, arrowRight } from "../vectors/svgs";
import bjpic from "../imgs/blackjack.jpg";
import IYClogo from "../imgs/IYClogo.webp";
import tictactoepic from "../imgs/tictactoe.jpg";
import "../styles/projects.css";

const projects = [
  {
    name: "BlackJack game",
    link: "https://main.d1i6rlevjdnbbt.amplifyapp.com/",
    img: bjpic,
  },
  { name: "Impact york county dashboard", link: "http://67.197.180.80/", img: IYClogo },
  { name: "TicTacToe game", link: "https://main.d2euxanuejnmck.amplifyapp.com/", img: tictactoepic },
  //   { name: "project4", link: null, img: null },
  //   { name: "project5", link: null, img: null },
];

const Projects = () => {
  const [currProj, setCurrProj] = useState(0);
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
        document
          .getElementById("carouselmiddle")
          .classList.remove("slideright");
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
      <p>Personal projects</p>
      <div id="projects" ref={ref}>
        <button className="arrowbtn" id="leftbtn" onClick={handleLeftBtn}>
          {arrowLeft}
        </button>
        <div id="carouselcontainer">
          <div id="carouselleft2"></div>
          <div id="carouselleft" onClick={handleLeftBtn}>
            {projectsList[prevproj]}
          </div>

          <div id="carouselmiddle">
            <a href={projects[currProj].link}>{projectsList[currProj]}</a>
          </div>

          <div id="carouselright" onClick={handleRightBtn}>
            {projectsList[nextproj]}
          </div>
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
