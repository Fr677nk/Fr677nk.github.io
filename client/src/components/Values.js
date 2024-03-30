import React, { useEffect, useRef, useState } from "react";
import "../styles/values.css";
import {
  passionVector,
  creativityVector,
  innovationVector,
} from "../vectors/svgs";

const Values = () => {
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

  useEffect(() => {
    if (isVisable) {
      document.querySelectorAll(".vectorgraphic").forEach((item) => {
        item.classList.add("show");
      });
    } else {
      document.querySelectorAll(".vectorgraphic").forEach((item) => {
        item.classList.remove("show");
      });
    }
  }, [isVisable]);
  return (
    <div id="valuescontainer">
      <p>
        What development means to <p id="meline">me</p>
      </p>
      <div id="svgscontainer" ref={ref}>
        <div id="passioncontainer" className="vectorgraphic">
          {passionVector}
          <p>Passion</p>
        </div>
        <div id="creativitycontainer" className="vectorgraphic">
          {creativityVector}
          <p>Creativity</p>
        </div>
        <div id="innovationcontainer" className="vectorgraphic">
          {innovationVector}
          <p>Innovation</p>
        </div>
      </div>
    </div>
  );
};

export default Values;
