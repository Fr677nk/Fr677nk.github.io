import React, { useEffect, useState } from "react";
import "../styles/laptopscreen.css";

const LaptopScreen = () => {
  const [screenText, setScreenText] = useState("");
  const message1 = "Hello, my name is frank.";
  useEffect(() => {
    let i = 0;
    let tempstring = "";
    let paused = false;
    setInterval(() => {
      if (!paused) {
        tempstring += message1.charAt(i);
        setScreenText(tempstring);
        i++;
      }
    }, 100);
  }, []);

  useEffect(() => {}, [screenText]);

  return (
    <div id="laptopscreen">
      <p>{screenText}</p>
    </div>
  );
};

export default LaptopScreen;
