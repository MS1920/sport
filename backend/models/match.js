const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
  teamOne: String,
  scoreOne: Number,
  scoreTwo: Number,
  teamTwo: String,
});

const match = mongoose.model("Match", matchSchema);
module.exports = match;
