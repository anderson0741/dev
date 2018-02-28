const express = require('express');
const listingRoutes = express.Router();
const Listings = require('../models/models');

listingRoutes.get('/', (req, res) => {
    Listings.find({user: req.user._id}, (err, listingz) => {
        if(err) return res.status(500).send(err);
        return res.send(listingz);
    })
});

listingRoutes.post('/', (req, res) => {
    const newListing = new Listings(req.body);
    newListing.user = req.user._id;
    newListing.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newListing);
    })
});

listingRoutes.get('/:id', (req, res) => {
    Listings.findOne({_id: req.params.listingId, user: req.user._id}, (err, listing) => {
        if (err) return res.status(500).send(err);
        // this one below might be wrong
        if(!listing) return res.status(404).send("No listing found");
        return res.send(listing);
    })
});

listingRoutes.put('/:id', (req, res) => {
    //Might be wrong for what I am doing
    Listings.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.listingId, user: req.user._id},
        req.body,
        {new: true},
        (err, listing) => {
            if (err) return res.status(500).send(err);
            return res.send(listing);
        }
    );
    // Listings.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedListing) => {
    //     if (err) return res.status(500).send(err);
    //     return res.send(updatedListing);
    // })
});

listingRoutes.delete('/:id', (req, res) => {
    console.log(req.params.id)
    // Listings.findByIdAndRemove(req.params.id, (err, deletedListing) =>{
    //     if (err) return res.status(500).send(err);
    //     return res.send(deletedListing);
    // })
    // Could be wrong below
    Listings.findOneAndRemove({_id: req.params.listingId, user: req.user._id}, (err, listing) => {
        if (err) return res.status(500).send(err);
        return res.send(listing);
    });
});

module.exports = listingRoutes;