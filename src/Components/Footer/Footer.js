import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaDiscord, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-container">
        <div className="about-desc">
          <p>About Us</p>
          <ul>
            <li OnClick={() => navigate("/about")}>Who we are</li>
          </ul>
        </div>

        <div className="page-directory">
          <p>Explore More</p>
          <ul>
            <li>Home</li>
            <li>Heroes</li>
            <li>Forum</li>
            <li>About</li>
          </ul>
        </div>

        <div className="contact-details">
          <p>Support</p>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="social-media">
          <p>Social Media</p>
          <ul>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaDiscord />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-content">
        <p>All Right Reserved 2022 © by FE Team 4A</p>
      </div>
    </footer>
  );
};

export default Footer;
