const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/level", (err) => {
    if (err) throw err;
    console.log("Connected to database");
});

app.use(bodyParser.json());
app.use('/level', require('./routes/index'));

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})