const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grocery: {
    type: String,
    amount: Number,
    isOrganic: Boolean
    },
    ingredients: [String]
});

module.exports = mongoose.model("Inventory", inventorySchema);