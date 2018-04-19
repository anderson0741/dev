const express = require('express');
const dogRoutes = express.Router();
const Dogs = require('../models/models');

dogRoutes.get('/', (req, res) => {
    Dogs.find({}, (err, listingz) => {
        if(err) return res.status(500).send(err);
        return res.send(listingz);
    })
});

dogRoutes.get('/:id', (req, res) => {
    Dogs.findById(req.params.id, (err, dogs) => {
        if (err) return res.status(500).send(err);
        return res.send(dogs);
    })
});