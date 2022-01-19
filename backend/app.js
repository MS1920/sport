// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");

// create express application
const app = express();

// configure Body Parser
// send response with JSON format
app.use(bodyParser.json());
// parse objects sended from FE
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// DB config
// import mongoose module
const mongoose = require("mongoose");
// connect app to DB
mongoose.connect("mongodb://localhost:27017/sportDB");

const path = require("path");
app.use("/images", express.static(path.join("backend/images")));

const matchRoutes = require("./routes/match-routes");
const blogRoutes = require("./routes/blog-routes");
const playerRoutes = require("./routes/player-routes");
const teamRoutes = require("./routes/team-routes");
const userRoutes = require("./routes/user-routes");
const weatherRoutes = require("./routes/weather-routes");

app.use("/api/matches", matchRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/users", userRoutes);
app.use("/api/weather", weatherRoutes);

module.exports = app;
