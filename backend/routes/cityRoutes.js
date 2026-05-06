const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  addCity,
  getCitiesWithWeather,
} = require("../controllers/cityController");

router.post("/", auth, addCity);
router.get("/", auth, getCitiesWithWeather);

module.exports = router;