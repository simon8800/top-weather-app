export default async function weatherData(location = "new york") {
  const weatherApiKey = "05de7421ab954967abf22208242405";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&aqi=no&days=3`,
      { mode: "cors" }
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Cannot find location");
    }
  } catch (error) {
    return "error";
  }
}
