import axios from "axios";

const SUPERHERO_API =
  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";

class Service {
  getAllHero() {
    return axios
      .get(`${SUPERHERO_API}/all.json`)
      .then((response) => response.data);
  }

  /**
   * Get the hero info by id
   * @param heroId id of hero to obtain
   * @returns the promise which resolves to the obtained data
   */
  getHeroById(heroId) {
    return axios
      .get(`${SUPERHERO_API}/id/${heroId}.json`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => response.data);
  }

  getHeroByName(heroName) {
    return axios
      .get(`${SUPERHERO_API}/${heroName}`)
      .then((response) => response.data);
  }
}

export default new Service();
