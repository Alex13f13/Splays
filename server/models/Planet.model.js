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
        },
        description: {
            type: String,
            default: "A Long Time Ago in a Galaxy Far, Far Away…",
        },
        challenge: {
            name: {
                type: String,
                unique: true,
                required: true,
            },
            image: {
                type: String,
            },
            emblem: {
                type: String,
            },
        },
    },
    {
        timestamps: true,
    }
);

const Planet = model("Planet", planetSchema);

module.exports = Planet;