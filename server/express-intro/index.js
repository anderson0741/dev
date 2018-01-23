const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const database = require("./database.js");

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.get("/database", (req, res) => {
    // console.log("Hey you found me!");
    // console.log(res);
    res.send(database);
});

app.post("/database", (req, res) => {
    let newData = req.body;
    newData._id = uuid();
    database.push(newData);
    res.send({
        msg: "Data added",
        data: newData
    });

});

app.get("/database/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundData;
    for (let i = 0; i < database.length; i++) {
        if (database[i]._id === id) {
            found = true;
            foundData = database[i];
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was found!`,
            data: foundData
        })
    } else {
        res.send({
            msg: `Item ${id} not found`
        })
    }
})

app.delete("/database/:id", (req, res) => {
    // console.log(req.params);
    let { id } = req.params;
    let found = false;
    // database = database.filter((data) => data._id !== id);
    for (let i = 0; i < database.length; i++) {
        if (database[i]._id === id) {
            database.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        })
    } else {
        res.send({
            msg: `Item ${id} was not found`
        })
    }
})

app.put("/database/:id", (req, res) => {
    let { id } = req.params;
    let updatedData = req.body;
    let found = false;
    for (let i = 0; i < database.length; i++) {
        if (database[i]._id === id) {
            database[i] = Object.assign(database[i], updatedData);
            updatedData = database[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedData
        })
    } else {
        res.send({
            msg: `Item ${id} not found`
        })
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});