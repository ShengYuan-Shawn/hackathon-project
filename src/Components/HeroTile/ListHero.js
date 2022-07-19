import React from "react";
import Service from "../service/Service";
import HeroTile from "./HeroTile";

function HeroList() {
  const [hero, setHero] = React.useState([]);

  const getAllHeroes = () => {
    Service.getAllHero().then((response) => {
      setHeroes(response);
    });
  };

  React.useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <div>
      {hero.map((hero) => {
        <HeroTile hero={hero} key={hero.id} />;
      })}
    </div>
  );
}

export default HeroList;
