const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new mongoose.Schema({
    "make": String,
    "model": String,
    "year": Number,
    "miles": Number,
    "drivetrain": String,
    "transmission": String,
    "color": String,
    "doors": String,
    "price": Number,
    "description": String,
    "photo1": String,
    "photo2": String,
    "photo3": String,
    "photo4": String
});

module.exports = mongoose.model("Portfolios", portfolioSchema);