const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require ('cors')

mongoose.connect("mongodb://localhost/bounty", (err) => {
    if (err) throw err;
    console.log("Connected to the Bounty Database");
});

// app.use(cors());
app.use(bodyParser.json());
app.use('/bounty', require('./routes/bounty'));


app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})