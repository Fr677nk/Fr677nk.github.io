import React, { useEffect, useState, useRef } from "react";
import "../styles/laptopscreen.css";

const LaptopScreen = () => {
  const [screenText, setScreenText] = useState("");
  const [isVisable, setIsVisable] = useState(false);

  const message1 = "Hello, my name is frank.";
  useEffect(() => {
    let i = 0;
    let tempstring = "";
    const intervalId = setInterval(() => {
      tempstring += message1.charAt(i);
      setScreenText(tempstring);
      i++;
    }, 100);
    return () => clearInterval(intervalId);
  }, [isVisable]);

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
    <div id="laptopscreen" ref={ref}>
      <p>{screenText}</p>
    </div>
  );
};

export default LaptopScreen;
