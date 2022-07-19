import React from "react";
import Service from "../service/Service";
import HeroTile from "./HeroTile/HeroTile";

function ListHero() {
  const [heroes, setHero] = React.useState([]);

  const getAllHeroes = () => {
    Service.getAllHero().then((response) => {
      setHero(response);
    });
  };

  React.useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <div>
      {heroes.map((hero) => {
        return <HeroTile hero={hero} key={hero.id} />;
      })}
    </div>
  );
}
export default ListHero;
