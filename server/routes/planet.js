const router = require("express").Router();
const mongoose = require("mongoose");

const Planet = require("../models/Planet.model");
const User = require("../models/User.model");


router.get("/allplanets", (req, res) => {

    Planet.find()
        .then(planets => res.json(planets))
        .catch(err => res.json({ err, errMessage: "Problema buscando Planetas" }))
});

router.get("/:id/details", (req, res) => {
    const { id } = req.params

    Planet.findById(id)
        .then(thePlanet => res.json(thePlanet))
        .catch(err => res.json({ err, errMessage: "Problema buscando un Planet" }))
})

router.put("/:planetId/:userId", (req, res) => {
    const { planetId, userId } = req.params

    User.findByIdAndUpdate(userId, { $pull: { planet: planetId } }, { new: true })
        .then(updateUserPlanet => res.json(updateUserPlanet))
        .catch(err => res.json({ err, errMessage: "Problema editando Coaster" }))
})


module.exports = router;