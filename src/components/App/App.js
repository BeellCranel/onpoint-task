import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  const firstSlide = useRef();
  const goToFirst = () => {
    firstSlide.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <Header goToFirst={goToFirst} />
      <Main firstSlide={firstSlide} />
      <Footer />
    </div>
  );
};

export default App;
