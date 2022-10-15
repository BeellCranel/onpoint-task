import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <a href="#home" className="header__home-link"></a>
        <p className="header__project">project</p>
      </div>
      <button className="header__nav-btn"></button>
    </header>
  );
};

export default Header;
