const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
// const cors = require('cors');

mongoose.connect("mongodb://localhost/polls", (err) => {
    if (err) throw err;
    console.log("Connected to the Polls Database");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cors());
app.use('/polls', require('./routes/routes'));

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})