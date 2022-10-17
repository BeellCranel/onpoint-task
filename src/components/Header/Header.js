import React from "react";
import "./Header.css";

const Header = ({ goToFirst }) => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <div onClick={goToFirst} className="header__home-link"></div>
        <p className="header__project">project</p>
      </div>
      <button className="header__nav-btn"></button>
    </header>
  );
};

export default Header;
