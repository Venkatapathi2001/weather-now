import React from "react";

function WeatherCard({ weather }) {
  // Basic mapping of weather codes (Open-Meteo)
  const weatherCodes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Light Drizzle",
    61: "Rain",
    71: "Snowfall",
    95: "Thunderstorm",
  };

  return (
    <div className="p-4 bg-blue-100 rounded-xl text-center shadow-md mt-4">
      <h2 className="text-xl font-semibold">{weather.city}</h2>
      <p className="text-5xl font-bold my-2">{weather.temp}°C</p>
      <p className="text-lg">{weatherCodes[weather.condition] || "Unknown"}</p>
      <p className="text-gray-700 mt-1">💨 Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
