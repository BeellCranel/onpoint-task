import React, { useRef, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";

const App = () => {
  const firstSlide = useRef();
  const secondSlide = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [benefits, setBenefits] = useState([]);
  const benefitsData = [
    {
      title: "01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "02",
      text: "Faucibus pulvinar elementum integer enim",
    },
    {
      title: "03",
      text: "Faucibus pulvinar elementum integer enim",
    },
    {
      title: "04",
      text: "Mi bibendum neque egestas congue quisque egestas diam",
    },
    {
      title: "05",
      text: "Venenatis lectus magna fringilla urna",
    },
    {
      title: "06",
      text: "Venenatis lectus magna fringilla urna",
    },
  ];
  const [firstToView, setFirstToView] = useState(0);

  useEffect(() => {
    setBenefits(benefitsData.slice(firstToView, firstToView + 3));
  }, []);

  useEffect(() => {
    setBenefits(benefitsData.slice(firstToView, firstToView + 3));
  }, [firstToView]);

  const popupOpenHandler = () => {
    setIsOpen(true);
  };

  const popupCloseHandler = () => {
    setIsOpen(false);
  };

  const goToFirst = () => {
    firstSlide.current.scrollIntoView({ behavior: "smooth" });
  };

  const goToSecond = () => {
    secondSlide.current.scrollIntoView({ behavior: "smooth" });
  };

  const prevBenefits = () => {
    if (firstToView > 0) {
      setFirstToView(firstToView - 3);
    }
  };

  const nextBenefits = () => {
    if (firstToView < 3) {
      setFirstToView(firstToView + 3);
    }
  };

  return (
    <div className="page">
      <Header goToFirst={goToFirst} />
      <Main
        firstSlide={firstSlide}
        secondSlide={secondSlide}
        goToSecond={goToSecond}
        popupOpenHandler={popupOpenHandler}
      />
      <Footer />
      <Modal
        isOpen={isOpen}
        popupCloseHandler={popupCloseHandler}
        benefits={benefits}
        firstToView={firstToView}
        prevBenefits={prevBenefits}
        nextBenefits={nextBenefits}
      />
    </div>
  );
};

export default App;
