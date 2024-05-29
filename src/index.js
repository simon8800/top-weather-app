import "./style.css";
import {
  changeCurrentWeather,
  changeCurrentWeatherWithQuery,
} from "./components/changeCurrentWeather";

const userSearch = document.querySelector("#search");
const submitButton = document.querySelector("#submit");

navigator.geolocation.getCurrentPosition(
  function (position) {
    changeCurrentWeather(
      `${position.coords.latitude},${position.coords.longitude}`
    );
  },
  function (position) {
    changeCurrentWeather("40.7826,-73.9656");
  }
);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeCurrentWeatherWithQuery(userSearch.value);
  userSearch.value = "";
});

// °F
// °C
