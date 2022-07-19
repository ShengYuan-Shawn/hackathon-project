import React from "react";
import "../../style.scss";

/**
 * Hero tile
 * @param param0 the properties where {hero=hero}
 */
function HeroTile({ hero }) {
  return (
    <div className="display-container">
      <img className="heroTile_img" src={hero.images.md} />
      <h2>{hero.name}</h2>
    </div>
  );
}

export default HeroTile;
