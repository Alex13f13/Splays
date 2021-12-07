const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["PLAYER", "ADMIN"],
      default: "PLAYER",
    },
    image: {
      type: String,
      default: "../images/profile/DEFAULT_PROFILE_IMAGE_SPLAYS.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    ship: {
      type: String,
      default: "../images/profile/Nave_Galaxy_Taxi_sin_fondo-01.png",
    },
    originPlanet: {
      type: String,
      default: "Earth",
    },
    planet: [{ type: Schema.Types.ObjectId, ref: "Planet" }]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
