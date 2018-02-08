const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventory');

mongoose.connect('mongodb://localhost/inventory', (err) => {
    if(err) throw err;
    console.log("Connected to database");
});

app.use(bodyParser.json());
app.use('/inventory', inventoryRoutes);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})