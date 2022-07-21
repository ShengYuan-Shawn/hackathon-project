import React from "react";
import Service from "../service/Service";
import Tile from "./Tile";
import "./List.css";

function List() {
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredHeroes, setFilteredHeroes] = React.useState([]);

  const getAllHeroes = () => {
    Service.getAllHero()
      .then((response) => {
        setHeroes(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    getAllHeroes();
  }, []);

  React.useEffect(() => {
    setFilteredHeroes(
      heroes.filter((hero) =>
        hero.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, heroes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="heroes-container">
      <input
        className="search-container"
        type="text"
        placeholder="Search Your Hero"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="hero-tiles">
        {filteredHeroes.map((hero) => {
          return <Tile hero={hero} key={hero.id} />;
        })}
      </div>
    </div>
  );
}

export default List;
