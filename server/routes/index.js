const router = require("express").Router();
const authRoutes = require("./auth");
const planetRoutes = require("./planet");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/planet", planetRoutes);

module.exports = router;
