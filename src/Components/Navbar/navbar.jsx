import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <nav className="nav-container">
        <div className="nav-left">
          <img src={logo} className="app-logo" alt="App Logo" />
        </div>

        <div className="nav-middle">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/heroes")}>Heroes</li>
            <li onClick={() => navigate("/forum")}>Forum</li>
            <li onClick={() => navigate("/about")}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
