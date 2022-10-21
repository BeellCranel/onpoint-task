import React from "react";
import Button from "../Button/Button";
import Spray from "../Spray/Spray";
import "./SlideThree.css";

const SlideThree = ({popupOpenHandler}) => {
  return (
    <section className="slide slide-three">
      <div className="slide-three__wrapper">
        <div className="slide-three__text-wrapper">
          <h2 className="slide-three__title">Ключевое сообщение</h2>
          <p className="slide-three__subtitle">
            Brend<b>xy</b>
          </p>
        </div>
        <div className="slide-three__blocks">
          <div className="slide-three__block slide-three__block_type_one">
            <div className="slide-three__plate-icon"></div>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </div>
          <div className="slide-three__block slide-three__block_type_two">
            <div className="slide-three__schedule-icon"></div>
            A arcu <br /> cursus vitae
          </div>
          <Button place="third" popupOpenHandler={popupOpenHandler} />
        </div>
      </div>
      <Spray />
    </section>
  );
};

export default SlideThree;
