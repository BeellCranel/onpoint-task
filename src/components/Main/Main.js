import "./Main.css";

import React from "react";
import SlideOne from "../SlideOne.js/SlideOne";
import SlideTwo from "../SlideTwo/SlideTwo";

const Main = () => {
  return (
    <main className="main">
      <SlideOne />
      <SlideTwo />
    </main>
  );
};

export default Main;
