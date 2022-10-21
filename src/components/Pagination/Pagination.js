import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ prevBenefits, nextBenefits }) => {
  const [active, setActive] = useState(true);

  const activeFirstDot = () => {
    prevBenefits();
    setActive(true);
  };
  const activeSecondDot = () => {
    nextBenefits();
    setActive(false);
  };

  return (
    <div className="pagination">
      <div
        className="pagination__button pagination__button-prev"
        onClick={activeFirstDot}
      />
      <ol className="pagination__pageDots">
        <li
          className={`pagination__dot ${
            active ? "pagination__dot-active" : ""
          }`}
        />
        <li
          className={`pagination__dot ${
            !active ? "pagination__dot-active" : ""
          }`}
        />
      </ol>
      <div
        className="pagination__button pagination__button-next"
        onClick={activeSecondDot}
      />
    </div>
  );
};

export default Pagination;
