console.log("jokes.model.js")

const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "Every joke must have a setup"],
        minlength: [1, "Setup must be at least 1 character"]
    },

    punchline: {
        type: String,
        required: [true, "Every joke must have a punchline"],
        minlength: [1, "Punchline must be at least 1 character"]
    }

}, { timestamps: true });

module.exports = mongoose.model("Joke", JokeSchema);