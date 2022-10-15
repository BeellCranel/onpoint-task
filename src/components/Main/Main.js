import "./Main.css"

import React from "react";
import SlideOne from "../SlideOne.js/SlideOne";
import SlideTwo from "../SlideTwo/SlideTwo";

const Main = () => {
  return <section className="main">
    <SlideOne />
    <SlideTwo />
  </section>;
};

export default Main;
