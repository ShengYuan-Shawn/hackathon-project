import React from "react";
import Service from "../service/Service";
import "./Detail.css";
import "./Details.scss";
import $ from "jquery";

function Detail({ value }) {
  const [hero, setHero] = React.useState([]);

  setTimeout(function start() {
    $(".bar").each(function (i) {
      var $bar = $(this);
      $(this).append('<span class="count"></span>');
      setTimeout(function () {
        $bar.css("width", $bar.attr("data-percent"));
      }, i * 100);
    });

    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).parent(".bar").attr("data-percent"),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now) + "%");
            },
          }
        );
    });
  }, 500);

  const getAHero = (e) => {
    Service.getHeroById(e)
      .then((response) => {
        setHero(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    console.log(value);
    getAHero(value);
  }, []);

  if (!hero) {
    return <div>Loading</div>;
  }

  return (
    <div className="main-container">
      <div className="hero-name-container">
        <h1>{hero.name}</h1>
      </div>
      <div className="hero-race-container">
        <h2>{hero?.appearance?.race}</h2>
      </div>
      <div className="detail-container">
        <div class="appearance-container holder">
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.intelligence) + "%"}
          >
            <span class="label">Intelligence</span>
          </div>
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.strength) + "%"}
          >
            <span class="label light">strength</span>
          </div>
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.speed) + "%"}
          >
            <span class="label">Speed</span>
          </div>
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.durability) + "%"}
          >
            <span class="label light">Durabitlity</span>
          </div>
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.power) + "%"}
          >
            <span class="label">Power</span>
          </div>
          <div
            class="bar cf"
            data-percent={String(hero?.powerstats?.combat) + "%"}
          >
            <span class="label light">Combat</span>
          </div>
        </div>
        <div className="image-container ">
          <img className="object-fill" src={hero?.images?.md} />
        </div>
        <div className="stats-container">
          <ol className="appearance-list">
            <li className="full-name">{hero?.biography?.fullName}</li>
            <li>Gender: {hero?.appearance?.gender}</li>
            <li>Eye Color: {hero?.appearance?.eyeColor}</li>
            <li>Hair: {hero?.appearance?.hairColor}</li>
            <li></li>
            <li>Publisher: {hero?.biography?.publisher}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Detail;
