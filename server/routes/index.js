const router = require("express").Router();
const authRoutes = require("./auth.routes");
const profileRoutes = require("./profile.routes");
const planetRoutes = require("./planet.routes");

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/planet", planetRoutes);


module.exports = router;
