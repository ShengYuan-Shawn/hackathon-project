import React from "react";

export default class fetchHero extends React.Component {
  state = {
    heroes: undefined,
  };

  // show component has render once
  async componentDidMount() {
    const baseURL =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";
    const response = await fetch(`${baseURL}/all.json`);
    const data = await response.json();
    // parse new state
    this.setState({ heroes: data });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div>
        {this.state.heroes?.map((hero) => (
          <p>{hero.name}</p>
        ))}
      </div>
    );
  }
}
