const City = require("../models/City");
const { getWeather } = require("../services/weatherService");

// ADD CITY
exports.addCity = async (req, res) => {
  try {
    const { cityName } = req.body;

    const city = await City.create({
      userId: req.user.id,
      cityName,
    });

    res.json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL CITIES
exports.getCities = async (req, res) => {
  try {
    const cities = await City.find({ userId: req.user.id });
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getCitiesWithWeather = async (req, res) => {
  try {
    const cities = await City.find({ userId: req.user.id });

    const data = await Promise.all(
      cities.map(async (city) => {
        const weather = await getWeather(city.cityName);
        return {
          ...city._doc,
          weather,
        };
      })
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.toggleFavorite = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    // security check
    if (city.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    city.isFavorite = !city.isFavorite;
    await city.save();

    res.json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};