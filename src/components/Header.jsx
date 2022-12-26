import React from "react";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <img src={logo} className="app-logo" alt="logo" />

        <Navigation />
      </div>
      <div className="headline">
        <h1>we are creatives</h1>
        <img src={arrow} alt="arrow" />
      </div>
    </header>
  );
};

export default Header;
