const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    "brand": String,
    "model": String,
    "year": Number,
    "miles": Number
})

module.exports = mongoose.model("Level", levelSchema);