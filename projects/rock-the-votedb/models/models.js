const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new mongoose.Schema({
    "title": String,
    "description": String
});

module.exports = mongoose.model("Polls", pollSchema);