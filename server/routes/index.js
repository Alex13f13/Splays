const router = require("express").Router();
const authRoutes = require("./auth");
const profileRoutes = require("./profile");
const planetRoutes = require("./planet");

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/planet", planetRoutes);


module.exports = router;
