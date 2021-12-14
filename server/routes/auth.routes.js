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

  console.log(username, password, email)

  if (!username) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  if (password.length < 6) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  User.findOne({ username }).then((found) => {

    if (found) {
      return res.status(400).json({ errorMessage: "Username already taken." });
    }

    let ships;

    Ship.find()
      .then(shopsData => {
        ships = shopsData.map((elm => elm._id))
      })
      .catch(err => res.json({ err, errMessage: "Problema buscando Ships en el Signup" }))

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
              "Username need to be unique. The username you chose is already in use.",
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
      .json({ errorMessage: "Please provide your username." });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  User.findOne({ username })
    .then((user) => {

      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong credentials." });
      }

      const isSamePassword = bcrypt.compareSync(password, user.password)

      if (!isSamePassword) {
        return res.status(400).json({ errorMessage: "Wrong credentials." });
      }

      req.session.currentUser = user;
      console.log(req.session.currentUser)
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
  console.log(req.session.currentUser, "el user en loggedIn")
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

router.post("/create-ship", (req, res) => { //Para nosotros
  const { name, image, stats } = req.body

  Ship.create({ name, image, stats })
    .then(shipData => res.json(shipData))
    .catch(err => res.json({ err, errMessage: "Problema creando Ship" }))

})

module.exports = router;
