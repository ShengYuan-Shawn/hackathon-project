import React from "react";

export default class fetchHero extends React.Component {
  state = {
    heroes: undefined,
  };

  // show component has render once
  async componentDidMount() {
    const baseURL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/`;
    const response = await fetch(`${baseURL}/all.json`);
    const data = await response.json();
    // parse new state
    this.setState({ heroes: data });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div>
        {/* if requirement before ? is undefined, abandoned attempts */}
        {this.state.heroes?.map((hero) => (
          <div>
            <div className="hero-cards" key={hero.id}>
              <img src={hero.images.md} />
              <p>{hero.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
