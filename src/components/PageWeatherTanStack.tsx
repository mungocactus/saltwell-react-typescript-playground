import { useState, useEffect } from "react";
import NavMenu from "./NavMenu.jsx";
import ShowDate from "./ShowDate.jsx";
import benshamSkies from "../assets/bensham-skies.jpg";
import brokenClouds from "../assets/weather-broken-clouds.jpg";
import clearSkies from "../assets/weather-clear.jpeg";
import drizzle from "../assets/weather-drizzle.jpeg";
import fewClouds from "../assets/weather-few-clouds.jpg";
import overcast from "../assets/weather-overcast.jpeg";
import rain from "../assets/weather-rain.jpeg";
import scatteredClouds from "../assets/weather-scattered-clouds.jpg";
import snow from "../assets/weather-snow.png";

export default function PageWeatherTanStack() {
  const [weather, setWeather] = useState({
    temp: "3",
    windSpeed: "30",
    windDirection: "180",
    pressure: "1011",
    humidity: "50",
    location: "Gateshead",
    overall: "Sunny",
    description: "bloody awful",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat);
      console.log(lon);
      const weatherapi = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=b8b85e414d6d20c6db5e6b69eb3858c9`;
      console.log(weatherapi);
      fetch(weatherapi)
        .then((response) => response.json())
        .then((data) => {
          setWeather({
            temp: data.main.temp,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            location: data.name,
            overall: data.weather["0"].main,
            description: data.weather["0"].description,
          });
        })
        .catch((error) => console.log(error));
    });
  }, []);

  console.log(weather);
  console.log(weather.description);
  console.log(weather.temp);

  const temp = Math.round(Number(weather.temp));
  console.log(temp);
  let weatherTemp = "";

  switch (true) {
    case temp > 26:
      weatherTemp = "weather-temp red";
      break;
    case temp > 20:
      weatherTemp = "weather-temp hot";
      break;
    case temp > 17:
      weatherTemp = "weather-temp warm";
      break;
    case temp > 14:
      weatherTemp = "weather-temp mild";
      break;
    case temp > 10:
      weatherTemp = "weather-temp";
      break;
    case temp > 6:
      weatherTemp = "weather-temp cool";
      break;
    case temp > 0:
      weatherTemp = "weather-temp cold";
      break;
    default:
      weatherTemp = "weather-temp freeze";
  }

  let skies = "";
  console.log(weather.overall);

  if (weather.overall === "Clouds") {
    switch (weather.description) {
      case "few clouds":
        skies = fewClouds;
        break;
      case "scattered clouds":
        skies = scatteredClouds;
        break;
      case "broken clouds":
        skies = brokenClouds;
        break;
      case "overcast clouds":
        skies = overcast;
        break;
      default:
        skies = benshamSkies;
    }
  } else {
    switch (weather.overall) {
      case "Clear":
        skies = clearSkies;
        break;
      case "Snow":
        skies = snow;
        break;
      case "Drizzle":
        skies = drizzle;
        break;
      case "Rain":
        skies = rain;
        break;
      default:
        skies = benshamSkies;
    }
  }

  const direction = Number(weather.windDirection);
  let compassPoint = "";
  console.log(direction);

  switch (true) {
    case direction > 337:
      compassPoint = "N";
      break;
    case direction > 293:
      compassPoint = "NW";
      break;
    case direction > 248:
      compassPoint = "W";
      break;
    case direction > 203:
      compassPoint = "SW";
      break;
    case direction > 158:
      compassPoint = "S";
      break;
    case direction > 113:
      compassPoint = "SE";
      break;
    case direction > 68:
      compassPoint = "E";
      break;
    case direction > 23:
      compassPoint = "NE";
      break;
    default:
      compassPoint = "N";
  }

  return (
    <div className="weatherpage">
      <section className="right-column">
        <NavMenu />
        <div className="weather">
          <section className="weather-left">
            <header>
              <div className="heading">
                <h1 className="header-title">The</h1>
                <h1 className="header-title">Weather</h1>
                <h1 className="header-title">Today</h1>
              </div>
            </header>
            <ShowDate />
          </section>
          <section className="weather-right">
            <h4 className="weather-location">{weather.location}</h4>
            <h4 className="weather-info">Current Temp</h4>
            <h4 className={weatherTemp}>{Math.round(Number(weather.temp))}</h4>
            <h4 className="weather-main">{weather.overall}</h4>
            <h4 className="weather-extra">{weather.description}</h4>
            <div className="details">
              <h4 className="item">Wind Speed ... </h4>
              <h4 className="value">
                {Math.round(Number(weather.windSpeed))} kpm
              </h4>
            </div>
            <div className="details">
              <h4 className="item">Wind Direction ... </h4>
              <h4 className="value">{compassPoint}</h4>
            </div>
            <div className="details">
              <h4 className="item">Humidity ... </h4>
              <h4 className="value">{weather.humidity}%</h4>
            </div>
            <div className="details">
              <h4 className="item">Barometric Pressure ... </h4>
              <h4 className="value">{weather.pressure}</h4>
            </div>
          </section>
        </div>
      </section>
      <section className="left-column">
        <img src={skies} alt="Cloud Image" />
      </section>
    </div>
  );
}
