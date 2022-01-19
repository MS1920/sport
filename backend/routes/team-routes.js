const express = require("express");
const router = express.Router();

const Team = require("../models/team");

const countryList = require("country-list");

const multer = require("multer");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

router.get("/countries", (req, res) => {
  res.status(200).json({
    result: countryList.getNames()
  })
})

// Business logic: Get All Teams
router.get("/", (req, res) => {
  console.log("here into business logic of Get All Teams");
  Team.find((error, docs) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        result: docs,
      });
    }
  });
});
// Business logic: Get Team by Id
router.get("/:id", (req, res) => {
  Team.findOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).json({
        result: data,
      });
    }
  });
});
// Business logic: Edit Team By Id
router.put("/:id", multer({ storage: storage }).single('logo'), (req, res) => {
  let url = req.protocol + '://' + req.get('host');
  req.body.logo = url + '/images/' + req.file.filename
  Team.updateOne({ _id: req.params.id }, req.body).then((data) => {
    res.status(200).json({
      result: "edited with success",
    });
  });
});
// Business logic: Add Team
router.post("/", multer({ storage: storage }).single('logo'), (req, res) => {
  let url = req.protocol + '://' + req.get('host');

  const team = new Team({
    logo: url + '/images/' + req.file.filename,
    name: req.body.name,
    foundation: req.body.foundation,
    country: req.body.country,
    stadium: req.body.stadium,
  });
  console.log("here team",team);
  team.save((error, result) => {
    if (error) {
      console.log(error);
    } else if (result) {
      res.status(200).json({
        result: "added with success",
      });
    }
  });
});
// Business logic: Delete Team
router.delete("/:id", (req, res) => {
  Team.deleteOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      result: "deleted with success",
    });
  });
});

module.exports = router;
