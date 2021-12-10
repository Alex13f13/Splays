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
      default: "https://res.cloudinary.com/dwxuz6cft/image/upload/v1638950627/splays_app/default_profile/DEFAULT_PROFILE_IMAGE_SPLAYS_j6my2u.png",
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
      default: "https://res.cloudinary.com/dwxuz6cft/image/upload/v1639066269/splays_app/splays_ships/Nave_Galaxy_Taxi_sin_fondo-01_vz5cyp.png",
    },
    originPlanet: {
      type: String,
      default: "Earth",
    },
    planet: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
    ships: [{
      name: {
        type: String,
      },
      image: {
        type: String,
        default: "https://res.cloudinary.com/dwxuz6cft/image/upload/v1639066269/splays_app/splays_ships/Nave_Galaxy_Taxi_sin_fondo-01_vz5cyp.png",
      },
      description: {
        type: String,
        default: "Cool ship"
      }
    }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
