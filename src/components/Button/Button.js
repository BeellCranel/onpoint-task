import React from "react";
import "./Button.css";

const Button = ({ onClickHandler, place, popupOpenHandler }) => {
  const buttonIconClassName = `btn__icon ${
    place === "first" ? "btn__icon_type_arrow" : "btn__icon_type_plus"
  }`;

  const buttonClassName = `btn ${place === "third" ? "btn__more" : ""}`;

  return (
    <button
      onClick={place === "third" ? popupOpenHandler : onClickHandler}
      className={buttonClassName}
    >
      <div className={buttonIconClassName}></div>
      {place === "first" ? "Что дальше?" : "Подробнее"}
    </button>
  );
};

export default Button;
