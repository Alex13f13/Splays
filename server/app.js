const express = require("express");
const app = express();
const path = require('path')

require("dotenv/config");
require("./db");
require("./config")(app);

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", require("./routes"));
app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));

module.exports = app;
