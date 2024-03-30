import React, { useEffect, useRef, useState } from "react";
import "../styles/blackbar.css";

const Blackbar = () => {
  const [isVisable, setIsVisable] = useState(false);

  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
        setIsVisable(entry[0].isIntersecting);
        
    }, {rootMargin: "300px", threshold: 0.9});
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if(isVisable) {
        document.querySelectorAll(".sliderp").forEach(element => {
            element.classList.add("show");
        });
    } else {
        document.querySelectorAll(".sliderp").forEach(element => {
            element.classList.remove("show");
        });
    }
  },[isVisable]);

  return (
    <div id="blackbar" ref={ref}>
      <p className="sliderp slide1" >Software developer</p>
      <p className="sliderp slide2" >Everlearner</p>
      <p className="sliderp slide3" >Logic Lover</p>
    </div>
  );
};

export default Blackbar;
