import weatherData from "./weatherData";
import { getDayOfWeek } from "./utils";
import { changeWeatherElements } from "./changeWeatherElements";

const currentLocation = document.querySelector(".current-location");
const currentDatetime = document.querySelector(".current-time");
const currentWeatherIcon = document.querySelector(".weather-icon");
const currentWeatherCondition = document.querySelector(".weather-condition");
const currentTemperature = document.querySelector(".current-temperature");
const scaleButton = document.querySelector(".scale-btn");
let currentLocationData;

async function changeCurrentWeather(position) {
  currentLocationData = await getCurrentWeather(position);
  let locationData = currentLocationData.location;
  let weatherData = currentLocationData.current;
  let forecastData = currentLocationData.forecast.forecastday[0].day;
  let scale = scaleButton.value;
  changeLocation(locationData);
  changeDatetime(locationData);
  changeWeather(weatherData, scale);
  changeWeatherElements(weatherData, forecastData, scale);
}

async function changeCurrentWeatherWithQuery(query) {
  let data = await weatherData(query);
  if (data === "error") {
    alert("Cannot find that location");
    return;
  }
  currentLocationData = data;
  let locationData = currentLocationData.location;
  let weather = currentLocationData.current;
  let forecast = currentLocationData.forecast.forecastday[0].day;
  let scale = scaleButton.value;
  changeLocation(locationData);
  changeDatetime(locationData);
  changeWeather(weather, scale);
  changeWeatherElements(weather, forecast, scale);
}

function changeLocation(location) {
  currentLocation.innerText = `${location.name}, ${location.country}`;
}

function changeDatetime(location) {
  let timeData = location.localtime.split(" ");
  let date = timeData[0];
  let time = timeData[1];
  let day = getDayOfWeek(date);
  currentDatetime.innerText = `${day} ${time}`;
}

function changeWeather(weather, scale) {
  // need to implement dependent on the current scale
  currentTemperature.innerText =
    scale === "f" ? `${weather.temp_f}°F` : `${weather.temp_c}°C`;
  currentWeatherCondition.innerText = weather.condition.text;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = weather.condition.icon;
  currentWeatherIcon.innerHTML = "";
  currentWeatherIcon.appendChild(weatherIcon);
}

async function getCurrentWeather(location = "new york") {
  let currentWeatherData = await weatherData(location);
  return currentWeatherData;
}

// Change scale
scaleButton.onclick = function () {
  let weatherData = currentLocationData.current;
  let forecastData = currentLocationData.forecast.forecastday[0].day;

  if (scaleButton.value == "f") {
    scaleButton.value = "c";
    scaleButton.innerText = "°C";
  } else {
    scaleButton.value = "f";
    scaleButton.innerText = "°F";
  }
  let scale = scaleButton.value;

  changeWeather(weatherData, scale);
  changeWeatherElements(weatherData, forecastData, scale);
};

export { changeCurrentWeather, changeCurrentWeatherWithQuery };

// °F
// °C
