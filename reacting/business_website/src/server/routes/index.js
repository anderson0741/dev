const express = require('express');
const levelRoutes = express.Router();
const Level = require('../models/index');

levelRoutes.get('/', (req, res) => {
    Level.find({}, (err, levelz) => {
        if(err) return res.status(500).send(err);
        return res.send(levelz);
    })
});

levelRoutes.post('/', (req, res) => {
    const newLevel = new Level(req.body);
    newLevel.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newLevel);
    })
});

levelRoutes.get('/:id', (req, res) => {
    Level.findById(req.params.id, (err, level) => {
        if (err) return res.status(500).send(err);
        return res.send(level);
    })
});

levelRoutes.put('/:id', (req, res) => {
    Level.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLevel) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty);
    })
});

levelRoutes.delete('/:id', (req, res) => {
    Level.findByIdAndRemove(req.params.id, (err, deletedLevel) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedLevel);
    })
});

module.exports = levelRoutes;