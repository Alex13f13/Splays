const { Schema, model } = require("mongoose");

const planetSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        image: {
            type: String,
            default: "/images/planetImg.png",//enlazar con su imagen
        },
        description: {
            type: String,
            default: "A Long Time Ago in a Galaxy Far, Far Away…",
        },
        challenge: {
            image: {
                type: String,
                default: "/images/planetImg.png",//enlazar con su imagen
            },
            emblem: {
                type: String,
                default: "/images/emblem.png",//enlazar con su imagen
            },
        },
    },
    {
        timestamps: true,
    }
);

const Planet = model("Planet", planetSchema);

module.exports = Planet;