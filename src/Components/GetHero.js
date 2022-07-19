import React from "react";
import Service from "../service/Service";
// import getHeroByName from ""

function GetHero() {
  const [hero, setHero] = React.useState({});
  const regInput = React.useRef(null);

  const getHero = () => {
    const inputValue = regInput.current.value;

    Service.getHeroById(inputValue).then((Heroes) => {
      setHero(Heroes);
    });
    console.log(hero);
  };

  return (
    <div>
      <input
        id="id"
        name="id"
        type="id"
        ref={regInput}
        autoComplete="id"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="ID"
      />
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={getHero}
      >
        Send Request
      </button>

      <p>{hero.name}</p>
    </div>
  );
}

export default GetHero;
