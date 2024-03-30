import React, { useEffect } from "react";
import "../styles/overlay.css";

const Overlay = (props) => {
  //   useEffect(() => {
  //     console.log(props.currentPage);
  //   }, [props.currentPage]);

  let dotsList = ["", "", "", "", ""];
  dotsList = dotsList.map((item, i) => {
    if (i === props.currentPage) {
      return (
        <div key={"sidedot"+i} className="sidedot" style={{ backgroundColor: "black" } }>
          {item}
        </div>
      );
    } else {
      return (
        <div  key={"sidedot"+i}className="sidedot" style={{ backgroundColor: "lightgrey" }}>
          {item}
        </div>
      );
    }
  });
  return (
    <div id="overlay">
      {/* <p>{props.currentPage}</p> */}
      <ul>{dotsList}</ul>
    </div>
  );
};

export default Overlay;
