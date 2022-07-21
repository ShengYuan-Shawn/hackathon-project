import React from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

function HeroesId() {
  let { heroesid } = useParams();

  return (
    <div>
      <main className="bg-black">
        <div className="text-white"></div>
        <Detail value={heroesid} />
      </main>
    </div>
  );
}

export default HeroesId;
