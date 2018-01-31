const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const bountySchema = new mongoose.Schema({
    "name": String,
    "type": String,
    "reward": Number,
    "alive": Boolean
});

module.exports = mongoose.model("Bounty", bountySchema);