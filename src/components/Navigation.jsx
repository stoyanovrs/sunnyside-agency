import React, { useState } from "react";
import burger from "../assets/images/icon-hamburger.svg";

const Navigation = () => {
  // const [first, setfirst] = useState(second);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // let menu = document.querySelector(".app-main-nav");
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };

  return (
    <div className="menu-container">
      <button
        className={`hamburger ${isActive ? "opened" : ""}`}
        onClick={handleClick}
      >
        <img src={burger} className="burger" alt="menu" />
      </button>
      <nav className="app-main-nav">
        <ul className={`main-menu ${isActive ? "droped" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <button className="header-cta">Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
