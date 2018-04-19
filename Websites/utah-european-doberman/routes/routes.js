const express = require('express');
const dogRoutes = express.Router();
const Dogs = require('../models/models');

dogRoutes.get('/', (req, res) => {
    Dogs.find({}, (err, dogz) => {
        if(err) return res.status(500).send(err);
        return res.send(dogz);
    })
});

dogRoutes.post('/', (req, res) => {
    const newDog = new Dogs(req.body);
    // listing.user = req.user._id;
    newDog.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newDog);
    })
});

dogRoutes.get('/:id', (req, res) => {
    Dogs.findById(req.params.id, (err, dog) => {
        if (err) return res.status(500).send(err);
        return res.send(dog);
    })
});

dogRoutes.put('/:id', (req, res) => {
    Dogs.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDog) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedDog);
    })
});

dogRoutes.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Dogs.findByIdAndRemove(req.params.id, (err, deletedDog) =>{
        if (err) return res.status(500).send(err);
        return res.send(deletedDog);
    })
});

module.exports = dogRoutes;