const { text } = require("body-parser");
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  date: Date,
  image: String,
  title: String,
  description: String,
});

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;
