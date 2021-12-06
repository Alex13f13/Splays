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
      default: "", //IMAGEN DE PERFIL
    },
    description: {
      type: String,
      default: "Ready",
      //LIMITAR DESCRICION
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
    emblems: //Array de emblemas del usuario
      [
        {
          emblem: {
            type: String,
            default: "/images/emblem.png",//enlazar con su imagen
          }
        }
      ]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
