const express = require('express');
const app = express();
require("dotenv").config(); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const expressJwt = require("express-jwt");

mongoose.connect("mongodb://localhost/listing", (err) => {
    if (err) throw err;
    console.log("Connected to the Listings Database");
});

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/auth", require('./routes/auth'));
app.use('/api/listing', require('./routes/routes'));

app.listen(8088, () => {
    console.log("Server is running on port 8088");
})