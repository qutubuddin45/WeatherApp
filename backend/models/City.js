const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cityName: String,
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("City", citySchema);