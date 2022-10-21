import React from "react";
import Pagination from "../Pagination/Pagination";
import "./Modal.css";

const Modal = ({
  isOpen,
  popupCloseHandler,
  benefits,
  prevBenefits,
  nextBenefits,
}) => {
  const Benefit = ({ title, subtitle }) => {
    return (
      <li className="modal__item">
        <h3 className="modal__item-title">{title}</h3>
        <p className="modal__item-subtitle">{subtitle}</p>
      </li>
    );
  };

  return (
    <div className={isOpen ? "modal modal__open" : "modal"}>
      <div className="modal__wrapper">
        <div className="modal__close-btn" onClick={popupCloseHandler}></div>
        <h2 className="modal__title">Преимущества</h2>
        <p className="modal__subtitle">
          brend<b>xy</b>
        </p>
        <ol className="modal__list">
          {benefits.map((b, i) => (
            <Benefit key={i} title={b.title} subtitle={b.text} />
          ))}
        </ol>
        <Pagination prevBenefits={prevBenefits} nextBenefits={nextBenefits} />
      </div>
    </div>
  );
};

export default Modal;
