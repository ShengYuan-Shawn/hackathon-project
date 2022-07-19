import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} className="app-logo" alt="App Logo" />
        </div>

        <div className="nav-middle">
          <ul>
            <li>Home</li>
            <li>Heroes</li>
            <li>Forum</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
