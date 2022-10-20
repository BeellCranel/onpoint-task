import "./Main.css";

import React from "react";
import SlideOne from "../SlideOne.js/SlideOne";
import SlideTwo from "../SlideTwo/SlideTwo";
import SlideThree from "../SlideThree.js/SlideThree";

const Main = ({ firstSlide, secondSlide, goToSecond }) => {
  return (
    <main className="main">
      <SlideOne firstSlide={firstSlide} goToSecond={goToSecond} />
      <SlideTwo secondSlide={secondSlide} />
      <SlideThree />
    </main>
  );
};

export default Main;
