const express = require('express');
const maryRoutes = express.Router();
const Mary = require('../models/models');

maryRoutes.get('/', (req, res) => {
    Mary.find({}, (err, maryzs) => {
        if (err) return res.status(500).send(err);
        return res.send(maryzs);
    })
});
maryRoutes.post('/', (req, res) => {
    const newMaryz = new Maryz(req.body);
    maryz.user = req.user._id;
    newMaryz.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newMaryz);
    })
});
maryRoutes.get('/:id', (req, res) => {
    Maryz.findById(req.params.id, (err, maryz) => {
        if (err) return res.status(500).send(err);
        return res.send(maryz);
    })
});
maryRoutes.put('/:id', (req, res) => {
    Maryz.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMaryz) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedMaryz);
    })
});
maryRoutes.delete('/:id', (req, res) => {
    Maryz.findByIdAndRemove(req.params.id, (err, deletedMaryz) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedMaryz);
    })
});     

module.exports = maryRoutes;