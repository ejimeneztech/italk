import React, { useState } from "react";
import "./Filter.css";

export default function Filter(props) {
  const [activeButton, setActiveButton] = useState("activities");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleAboutClick = () => {
    handleButtonClick("about");
    props.click1(); // Call the corresponding click handler function passed as props
  };

  const handleNeedClick = () => {
    handleButtonClick("need");
    props.click2();
  };

  const handleActivitiesClick = () => {
    handleButtonClick("activities");
    props.click3();
  };

  return (
    <div className="filter">
      <button
        className={`myButton ${activeButton === "about" ? "active" : ""}`}
        onClick={handleAboutClick}
      >
        <img
          src={require("./images/about.png")}
          className="thumbnailImage"
          alt="about me"
        />
        About Me
      </button>
      <button
        className={`myButton ${activeButton === "need" ? "active" : ""}`}
        onClick={handleNeedClick}
      >
        <img
          src={require("./images/need.png")}
          className="thumbnailImage"
          alt="Neccessities"
        />
        Things I Need
      </button>
      <button
        className={`myButton ${activeButton === "activities" ? "active" : ""}`}
        onClick={handleActivitiesClick}
      >
        <img
          src={require("./images/activities.png")}
          className="thumbnailImage"
          alt="Activities"
        />
        Activities
      </button>
    </div>
  );
}
