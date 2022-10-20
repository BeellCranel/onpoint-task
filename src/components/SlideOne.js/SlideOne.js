import React from "react";
import Button from "../Button/Button";
import "./SlideOne.css";

const SlideOne = ({ firstSlide, goToSecond }) => {
  return (
    <section className="slide slide-one" ref={firstSlide}>
      <div className="slide-one__back-img slide-one__back-img_type_blueLong"></div>
      <div className="slide-one__back-img slide-one__back-img_type_sperm"></div>
      <div className="slide-one__back-img slide-one__back-img_type_spermBlur"></div>
      <div className="slide-one__back-img slide-one__back-img_type_blurOne"></div>
      <div className="slide-one__back-img slide-one__back-img_type_blurTwo"></div>

      <div className="slide-one__back-img slide-one__back-img_type_blueBig"></div>
      <div className="slide-one__back-img slide-one__back-img_type_blueCircleOne"></div>
      <div className="slide-one__back-img slide-one__back-img_type_blueCircleTwo"></div>
      <div className="slide-one__back-img slide-one__back-img_type_blueSpiny"></div>

      <h1 className="slide-one__title">Привет,</h1>
      <div className="slide-one__subtitle-wrapper">
        <p className="slide-one__subtitle">
          это <b className="slide-one__subtitle_style_bold">не</b> коммерческое
          задание
        </p>
        <Button onClickHandler={goToSecond} place="first" />
      </div>
    </section>
  );
};

export default SlideOne;
