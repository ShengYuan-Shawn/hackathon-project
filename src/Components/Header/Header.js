import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} className="App Logo" alt="App Logo" />
          </div>
        </div>
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Type here" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
