const axios = require("axios");

exports.getWeather = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return res.data;
};