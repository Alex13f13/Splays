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
      default: "https://res.cloudinary.com/dwxuz6cft/image/upload/v1639448825/splays_app/splays_ships/SPLAYS_COSMIC_BUCKET_xvsaed.png",
    },
    originPlanet: {
      type: String,
      default: "Earth",
    },
    planet: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
    ships: [{ type: Schema.Types.ObjectId, ref: "Ship" }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
