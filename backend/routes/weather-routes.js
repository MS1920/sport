const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/:city", (req, res) => {
  let city = JSON.parse(req.params.city).city;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  axios
    .get(apiUrl)
    .then((response) => {
      let data = {
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      };
      res.status(200).json({
        result: data,
      });
    })
    .catch((error) => {
      console.log(error.response.status);
      res.status(200).json({
        result: error.response.status,
      });
    });
});
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
