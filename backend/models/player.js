const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  age: Number,
  name: String,
  poste: String,
  number: Number,
  avatar: String,
  note: Number,
});

const player = mongoose.model("Player", playerSchema);

module.exports = player;
