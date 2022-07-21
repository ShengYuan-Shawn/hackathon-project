import React from "react";
import { Link } from "react-router-dom";
import stars from "../assets/stars.png";
import city from "../assets/city.png";
import men from "../assets/men.png";
import women from "../assets/women.png";

const Home = () => {
  // Reference to the start
  const starRef = React.useRef();
  const menRef = React.useRef();
  const womenRef = React.useRef();

  /* Using use effect to check current ref state,
   if no then run the function when scroll */
  React.useEffect(() => {
    if (!starRef.current || !menRef.current || !womenRef.current) return;
    function ___() {
      let value = window.scrollY;
      starRef.current.style.top = `${value * 0.75}px`;
      menRef.current.style.left = `${value * 1.32}px`;
      womenRef.current.style.left = `${value * 0.75}px`;
    }
    window.addEventListener("scroll", ___);
    return () => window.removeEventListener("scroll", ___);
  }, [starRef, menRef, womenRef]);

  return (
    <div className="home-container">
      <section className="animation">
        <img src={stars} id="stars" ref={starRef} alt="stars" />
        <img src={city} id="city" alt="city" />
        <img src={men} id="men" ref={menRef} alt="men" />
        <img src={women} id="women" ref={womenRef} alt="women" />
      </section>
      <div className="scroll-down">
        <h3>Scroll Down</h3>
        <div className="scroll-btn">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </div>
      </div>
      <div className="landing-content">
        <h2>
          Everyone Has Their Own Superhero Inside Them Waiting To Be Discovered
        </h2>
        <p>
          Welcome to SuperoCo - where you can find your favourite superhero
          characters (Heroes, Anti-Heroes or Villians) details with ease.
        </p>
        <Link to={"/heroes"}>
          <button>Checkout A Superhero!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
