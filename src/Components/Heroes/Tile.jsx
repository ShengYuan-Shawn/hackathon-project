import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tile.css";

export default function Tile({ hero }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/heroes/${hero.id}`)} className="hero-card">
      <img src={hero.images.md} />
      <div className="hero-detail-container">
        <h1 className="hero-name-container">{hero.name}</h1>
        <h3>{hero.biography.fullName}</h3>
        <h4 className="">{hero.appearance.race}</h4>
      </div>
    </div>
  );
}
