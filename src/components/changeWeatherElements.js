const wind = document.querySelector(".wind-value");
const humidity = document.querySelector(".humidity-value");
const feelsLike = document.querySelector(".feels-like-value");
const windDirection = document.querySelector(".wind-direction-value");
const pressure = document.querySelector(".pressure-value");
const uvIndex = document.querySelector(".uv-index-value");
const precipitation = document.querySelector(".precipitation-value");
const highLow = document.querySelector(".high-low-value");

function changeWeatherElements(weather, forecast, scale) {
  wind.innerText =
    scale === "f" ? `${weather.wind_mph} mph` : `${weather.wind_kph} kph`;
  humidity.innerText = `${weather.humidity}%`;
  feelsLike.innerText =
    scale === "f" ? `${weather.feelslike_f}°F` : `${weather.feelslike_c}°C`;
  windDirection.innerText = weather.wind_dir;
  pressure.innerText =
    scale === "f" ? `${weather.pressure_in} in` : `${weather.pressure_mb} mb`;
  uvIndex.innerText = `${weather.uv} / 11`;
  precipitation.innerText =
    scale === "f" ? `${weather.precip_in} in` : `${weather.precip_mm} mm`;
  highLow.innerText =
    scale === "f"
      ? `${forecast.maxtemp_f}°F/${forecast.mintemp_f}°F`
      : `${forecast.maxtemp_c}°C/${forecast.mintemp_c}°C`;
}

export { changeWeatherElements };
