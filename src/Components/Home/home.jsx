import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-content">
        <h2>
          Everyone Has Their Own Superhero Inside Them Waiting To Be Discovered
        </h2>
        <p>
          Welcome to SuperoCo - We target to create a superhero codex that
          allows users to find their favourite superhero characters (Heroes,
          Anti-Heroes or Villians) details and their backstory with ease.
        </p>
        <Link to={"/heroes"}>
          <button>Checkout A Superhero!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
