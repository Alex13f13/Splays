const router = require("express").Router();

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 10;

const User = require("../models/User.model");
const Ship = require("../models/Ship.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.post("/signup", isLoggedOut, (req, res) => {
  const { username, password, email } = req.body;


  if (!username) {
    return res
      .status(400)
      .json({ errorMessage: "Please enter a valid username" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      errorMessage: "Password must be min. 6 characters long",
    });
  }

  User.findOne({ username }).then((found) => {

    if (found) {
      return res.status(400).json({ errorMessage: "Username is already taken" });
    }

    let ships;

    Ship.find()
      .then(shopsData => {
        ships = shopsData.map((elm => elm._id))
      })
      .catch(err => res.json({ err, errMessage: "No ships were generated" }))

    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {

        return User.create({
          username,
          password: hashedPassword,
          email,
          ships
        });
      })
      .then((user) => {
        req.session.currentUser = user;
        res.status(201).json(user);
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({ errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).json({
            errorMessage:
              "Username is already taken",
          });
        }
        return res.status(500).json({ errorMessage: error.message });
      });
  });
});

router.post("/login", isLoggedOut, (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ errorMessage: "Username does not exist" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      errorMessage: "Wrong password",
    });
  }

  User.findOne({ username })
    .then((user) => {

      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong username" });
      }

      const isSamePassword = bcrypt.compareSync(password, user.password)

      if (!isSamePassword) {
        return res.status(400).json({ errorMessage: "Wrong password" });
      }

      req.session.currentUser = user;
      return res.json(user);
    })
    .catch((err) => next(err))
})

router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.json({ message: "Done" });
  });
});

router.get("/isloggedin", (req, res) => {
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

router.post("/create-ship", (req, res) => { //For developers
  const { name, image, stats } = req.body

  Ship.create({ name, image, stats })
    .then(shipData => res.json(shipData))
    .catch(err => res.json({ err, errMessage: "Problema creando Ship" }))

})

module.exports = router;
