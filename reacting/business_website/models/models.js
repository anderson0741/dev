const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    "make": String,
    "model": String,
    "year": Number,
    "miles": Number,
    "drivetrain": String,
    "transmission": String,
    "color": String,
    "doors": Number,
    "price": Number
});

module.exports = mongoose.model("Listings", listingSchema);