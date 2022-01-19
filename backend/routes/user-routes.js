const express = require("express");
const router = express.Router();

const User = require("../models/user");

const bcrypt = require("bcrypt");

// Business logic: Login
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((emailResult) => {
      if (!emailResult) {
        res.status(200).json({
          res: "E-mail not found",
        });
      }
      return bcrypt.compare(req.body.password, emailResult.password);
    })
    .then((passwordResult) => {
      if (!passwordResult) {
        res.status(200).json({
          res: "Password false",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          firstName: finalUser.firstName,
          lastName: finalUser.lastName,
          role: finalUser.role,
        };
        res.status(200).json({
          res: "User true",
          user: user,
        });
      });
    });
});
// Business logic: Signup
router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 8).then((cryptPassword) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: cryptPassword,
      role: req.body.role,
    });
    user.save((error, newUser) => {
      if (error) {
        if (error.errors.email) {
          res.status(200).json({
            result: "0",
          });
        }
      } else if (newUser) {
        res.status(200).json({
          result: newUser,
        });
      }
    });
  });
});
router.get("/", (req, res) => {
  User.find((error, docs) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        result: docs,
      });
    }
  });
});
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      result: data,
    });
  });
});
router.put("/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body).then((data) => {
    res.status(200).json({
      result: "edited with success",
    });
  });
});
router.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      result: data,
    });
  });
});

module.exports = router;
