import React from "react";
import "./HeroTile.css";

function HeroTile({ hero }) {
  return (
    <div className="display-container">
      <img className="heroTile_img" src={hero.images.md} />
      <h2>{hero.name}</h2>
    </div>
  );
}

export default HeroTile;
