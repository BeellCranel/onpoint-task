import React, { useRef, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  const firstSlide = useRef();
  const secondSlide = useRef();

  const goToFirst = () => {
    firstSlide.current.scrollIntoView({ behavior: "smooth" });
  };

  const goToSecond = () => {
    secondSlide.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <Header goToFirst={goToFirst} />
      <Main
        firstSlide={firstSlide}
        secondSlide={secondSlide}
        goToSecond={goToSecond}
      />
      <Footer />
    </div>
  );
};

export default App;
