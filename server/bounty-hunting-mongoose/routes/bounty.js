const express = require('express');
const bountyRoutes = express.Router();
const Bounty = require('../models/bounty');

bountyRoutes.get('/', (req, res) => {
    Bounty.find({}, (err, bountyz) => {
        if (err) return res.status(500).send(err);
        return res.send(bountyz);
    })
});
bountyRoutes.post('/', (req, res) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newBounty);
    })
});
bountyRoutes.get('/:id', (req, res) => {
    Bounty.findById(req.params.id, (err, bounty) => {
        if (err) return res.status(500).send(err);
        return res.send(bounty);
    })
});
bountyRoutes.put('/:id', (req, res) => {
    Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBounty) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty);
    })
});
bountyRoutes.delete('/:id', (req, res) => {
    Bounty.findByIdAndRemove(req.params.id, (err, deletedBounty) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedBounty);
    })
});     

module.exports = bountyRoutes;