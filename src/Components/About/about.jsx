import React from "react";
import groupPhoto from "../assets/group-photo.jpeg";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <p>About Us</p>
          </div>

          <div className="about-content-left">
            <img
              src={groupPhoto}
              className="dev-illustration"
              alt="dev-illustration"
            />
          </div>

          <div className="about-content-middle">
            <h4>More About Us -</h4>
            <br />
            <p>
              We're a group of fresh graduate that came from different study
              fields, and we have try to create an web application, SuperoCo
              that allow users to view and search superhero description and
              details. We have try to create a clean and responsive web design
              in SuperoCo.
            </p>
            <br />
            <br />
            <h4>Developers Wannabe -</h4>
            <br />
            <p>Amir Bin Ahmad, Farah Afiqah, Lim Sheng Yuan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
