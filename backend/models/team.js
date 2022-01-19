const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  logo: String,
  name: String,
  foundation: Number,
  country: String,
  stadium: String,
});

const team = mongoose.model("Team", teamSchema);

module.exports = team;
