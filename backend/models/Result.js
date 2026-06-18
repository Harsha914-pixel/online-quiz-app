const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    userName: String,
    score: Number
});

module.exports = mongoose.model("Result", resultSchema);