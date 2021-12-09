const router = require("express").Router();

const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/:id/user", isLoggedIn, (req, res) => {
    const { id } = req.params

    User.findById(id)
        .then(theUser => res.json(theUser))
        .catch(err => res.json({ err, errMessage: "Problema buscando el Ususario" }))
})

router.put("/:id/edit-profile", isLoggedIn, (req, res) => {
    const { id } = req.params
    const { username, image, originPlanet } = req.body

    User.findByIdAndUpdate(id, { username, image, originPlanet }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json({ err, errMessage: "Problema editando el Ususario" }))
})

router.put("/:id/edit-ship", isLoggedIn, (req, res) => {
    const { id } = req.params
    const { ship } = req.body

    User.findByIdAndUpdate(id, { ship }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json({ err, errMessage: "Problema editando la nave" }))
})

router.get("/:id/emblems", (req, res) => {
    const { id } = req.params

    User.findById(id).populate("planet")
        .then(theEmblems => res.json(theEmblems))
        .catch(err => res.json({ err, errMessage: "Problema buscando los emblemas" }))
})

router.delete("/:id/delete", isLoggedIn, (req, res) => {
    const { id } = req.params

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        res.json({ message: "Done" });
    })

    User.findByIdAndDelete(id)
        .then(deletedUser => res.json({ deletedUser }))
        .catch(err => res.json({ err, errMessage: "Problema borrando el Ususario" }))
})

module.exports = router;