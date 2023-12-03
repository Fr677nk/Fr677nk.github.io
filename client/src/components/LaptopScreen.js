import React, { useEffect, useState } from "react";
import "../styles/laptopscreen.css";

const LaptopScreen = () => {
  const [screenText, setScreenText] = useState("");
  const message1 = "Hello, my name is frank. hellooooooo";
  useEffect(() => {
    let i = 0;
    let tempstring = "";
    let paused = false;
    setInterval(() => {
      if (!paused) {
        tempstring += message1.charAt(i);
        setScreenText(tempstring);
        i++;
        // if (i == message1.length) {
        //   paused = true;
        //   setTimeout(() => {
        //     i = 0;
        //     tempstring = "";
        //     paused = false;
        //   }, 2000);
        // }
      }
    }, 150);
  }, []);

  useEffect(() => {}, [screenText]);

  return (
    <div id="laptopscreen">
      <p>{screenText}</p>
    </div>
  );
};

export default LaptopScreen;
