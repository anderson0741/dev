const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema({
    "name": String,
    "type": String,
    "reward": Number,
    "alive": Boolean
});

module.exports = mongoose.model("Bounty", bountySchema);