const express = require("express");
const router = express.Router();

// import match model
const Match = require("../models/match");

// Business logic: Get All matches
router.get("/", (req, res) => {
  console.log("here into business logic of Get All Matches");
  Match.find((error, docs) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        result: docs,
      });
    }
  });
});
// Business logic: Get Match By Id
router.get("/:id", (req, res) => {
  Match.findOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).json({
        result: data,
      });
    }
  });
});
// Business logic: Edit Match By Id
router.put("/:id", (req, res) => {
  Match.updateOne({ _id: req.params.id }, req.body).then((data) => {
    res.status(200).json({
      result: "edited with success",
    });
  });
});
// Business logic: Delete Match
router.delete("/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then((data) => {
    console.log(data);
    res.status(200).json({
      result: "deleted with success",
    });
  });
});
// Business logic: Add Match
router.post("/", (req, res) => {
  const match = new Match({
    teamOne: req.body.teamOne,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamTwo: req.body.teamTwo,
  });
  match.save((error, result) => {
    if (error) {
      console.log(error);
    } else if (result) {
      res.status(200).json({
        result: "added with success",
      });
    }
  });
});
router.get("/search/:teamOne", (req, res) => {
  Match.find({ teamOne: {$regex : req.params.teamOne.toLowerCase("")} }).then((data) => {
    if (data) {
      res.status(200).json({
        result: data,
      });
    }
  });
});

module.exports = router;
