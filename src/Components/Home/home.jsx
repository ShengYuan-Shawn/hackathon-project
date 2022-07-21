import React from "react";
import splashart from "../assets/landing-page.png";

const Home = () => {
  <div className="home-container">
    <h2>Get To Know Your Favourite Superhero With Just A Click</h2>
    <p>
      Welcome to SuperoCo - where you can find out your favourite superhero name
      and details with an image.
    </p>
    <button>Checkout A Superhero!</button>
    <img src={splashart} className="landing-page-art" alt="landing-page-art" />
    <splashart />
  </div>;
};

export default Home;
