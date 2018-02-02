const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/listings", (err) => {
    if (err) throw err;
    console.log("Connected to the Listings Database");
});

app.use(bodyParser.json());
app.use('/listing', require('./routes/routes'));

app.listen(8088, () => {
    console.log("Server is running on port 8088");
})