const { Schema, model } = require("mongoose");

const challengeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        image: {
            type: String,
            default: "/images/planetImg.png",//enlazar con su imagen
        },
        emblem: {
            type: String,
            default: "/images/emblem.png",//enlazar con su imagen
        },
    },
    {
        timestamps: true,
    }
);

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;