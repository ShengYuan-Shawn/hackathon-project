import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="about-content">
          <h3>About Us</h3>
          <p>
            We're a group of fresh graduate's developer wannabe <br />
            trying todeveloper a superhero codex app using REST API.
          </p>
        </div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>Heroes</li>
            <li>Forum</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="copyright-content">
        <p> 2022 FE Team 4A - SuperoCo | ALL Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
