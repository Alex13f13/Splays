const { Schema, model } = require("mongoose");

const shipSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: String,
        stats: String,
    },
    {
        timestamps: true,
    }
);

const Ship = model("Ship", shipSchema);

module.exports = Ship;