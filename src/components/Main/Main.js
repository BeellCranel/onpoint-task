import "./Main.css";

import React from "react";
import SlideOne from "../SlideOne.js/SlideOne";
import SlideTwo from "../SlideTwo/SlideTwo";

const Main = ({ firstSlide }) => {
  return (
    <main className="main">
      <SlideOne firstSlide={firstSlide} />
      <SlideTwo />
    </main>
  );
};

export default Main;
