const express = require('express');
const pollRoutes = express.Router();
const Polls = require('../models/models');

pollRoutes.get('/', (req, res) => {
    Polls.find({}, (err, pollz) => {
        if(err) return res.status(500).send(err);
        return res.send(pollz);
    })
});

pollRoutes.post('/', (req, res) => {
    const newPoll = new Polls(req.body);
    newPoll.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newPoll);
    })
});

pollRoutes.get('/:id', (req, res) => {
    Polls.findById(req.params.id, (err, poll) => {
        if (err) return res.status(500).send(err);
        return res.send(poll);
    })
});

pollRoutes.put('/:id', (req, res) => {
    Polls.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPoll) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedPoll);
    })
});

pollRoutes.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Polls.findByIdAndRemove(req.params.id, (err, deletedPoll) =>{
        if (err) return res.status(500).send(err);
        return res.send(deletedPoll);
    })
});

module.exports = pollRoutes;