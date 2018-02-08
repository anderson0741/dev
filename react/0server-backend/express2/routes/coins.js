const express = require('express');
const coinRoute = express.Router();
const coins = require("../database")

coinRoute.route("/")
    //handle requests here
    //if its a GET
    .get((req, res) => {
        // console.log(req.query);
        let query = req.query;
        let filteredCoins = coins.filter((coin) => {
            let found = true;
            for (let key in query) {
                if (coin[key] != query[key]) {
                    found = false;
                    break;
                }
            }
            return found;
        })
        res.send(filteredCoins);
    })
    //if its a POST
    .post((req, res) => {
        let newCoin = req.body;
        newCoin._id = uuid();
        coins.push(newCoin);
        res.send({
            msg: "Data added successfully",
            data: newCoin
        });
    });

//you need to add the route again only if the route changes
coinRoute.route("/:id/")
    .get((req, res) => {
        let { id } = req.params;
        let found = false;
        let foundCoin;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                found = true;
                foundCoin = coins[i];
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was found!`,
                data: foundCoin
            })
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    })

    .delete((req, res) => {
        let { id } = req.params;
        let found = false;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins.splice(i, 1);
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was successfully removed!`
            });
        } else {
            res.send({
                msg: `Item ${id} was not found!`
            })
        }
    })

    .put((req, res) => {
        let { id } = req.params;
        let updatedCoin = req.body;
        let found = false;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins[i] = Object.assign(coins[i], updatedCoin);
                updatedCoin = coins[i];
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was updated!`,
                data: updatedCoin
            });
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    });

    module.exports = coinRoute;