const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const session = require("express-session");

const MongoStore = require("connect-mongo");

const MONGO_URI = require("../utils/consts");

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super hyper secret key",
      resave: true,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: false,

      },
    })
  );

  app.use((req, res, next) => {
    req.user = req.session.currentUser || null;
    next();
  });
};
