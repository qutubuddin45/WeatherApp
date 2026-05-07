const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  addCity,
  getCitiesWithWeather,
  toggleFavorite,
} = require("../controllers/cityController");

router.post("/", auth, addCity);
router.get("/", auth, getCitiesWithWeather);
router.put("/:id/favorite", auth, toggleFavorite);

module.exports = router;