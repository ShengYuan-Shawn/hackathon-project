import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaDiscord, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="about-desc">
          <p>About Us</p>
          <ul>
            <li>
              <Link to={"/about"}>Who we are</Link>
            </li>
          </ul>
        </div>

        <div className="page-directory">
          <p>Explore More</p>
          <ul>
            <li>
              <Link to={"/heroes"}>Heroes</Link>
            </li>
            <li>
              <Link to={"/forum"}>Forum</Link>
            </li>
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
              <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">
                <FaTwitterSquare />
              </a>
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
