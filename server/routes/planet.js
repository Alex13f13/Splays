const router = require("express").Router();
const mongoose = require("mongoose");

const Planet = require("../models/Planet.model");
const User = require("../models/User.model");


router.post("/create", (req, res) => { //Esto es para nosotros
    const { name, image, description, challengeName, challengeImage, challengeEmblem } = req.body;

    const challenge = {
        name: challengeName,
        image: challengeImage,
        emblem: challengeEmblem,
    }

    Planet.create({ name, image, description, challenge })
        .then((updateUserPlanet => res.json(updateUserPlanet)))
        .catch((error) => {
            return res.status(500).json({ errorMessage: error.message });
        });

});

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

    User.findByIdAndUpdate(userId, { $push: { planet: planetId } }, { new: true })
        .then(updateUserPlanet => res.json(updateUserPlanet))
        .catch(err => res.json({ err, errMessage: "Problema editando Planeta" }))
})


module.exports = router;