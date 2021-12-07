const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
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
      default: "", //IMAGEN DE PERFIL
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
      default: "", //IMAGEN DE NAVE
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
