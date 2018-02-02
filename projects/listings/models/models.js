const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({

});

module.exports = mongoose.model("Listings", listingSchema);