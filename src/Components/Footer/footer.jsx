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
            <li>Heroes</li>
            <li>Forum</li>
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
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=J2GVKuYoIww">
                <FaDiscord />
              </a>
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
