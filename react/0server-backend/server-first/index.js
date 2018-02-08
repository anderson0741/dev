const express = require("express");
const bodyParser = require("body-parser");

const cars = require('./cars');

const app = express();
let port = 1968;

app.use(bodyParser.json());

app.get("/cars", (req, res) => {
    res.send(cars);
});

app.post("/cars", (req, res) => {
    cars.push(req.body);
    res.send({
        msg: "Data added",
        data: req.body
    })
});

app.listen(port, () => {
    console.log("Listening to " + port);
})
