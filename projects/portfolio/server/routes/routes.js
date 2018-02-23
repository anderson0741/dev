const express = require('express');
const portfolioRoutes = express.Router();
const Portfolios = require('../models/models');

portfolioRoutes.get('/', (req, res) => {
    Portfolios.find({}, (err, portfolioz) => {
        if(err) return res.status(500).send(err);
        return res.send(portfolioz);
    })
});

portfolioRoutes.post('/', (req, res) => {
    const newPortfolio = new Portfolios(req.body);
    portfolio.user = req.user;
    newPortfolio.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newPortfolio);
    })
});

portfolioRoutes.get('/:id', (req, res) => {
    Portfolios.findById(req.params.id, (err, portfolio) => {
        if (err) return res.status(500).send(err);
        return res.send(portfolio);
    })
});

portfolioRoutes.put('/:id', (req, res) => {
    Portfolios.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPortfolio) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedPortfolio);
    })
});

portfolioRoutes.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Portfolios.findByIdAndRemove(req.params.id, (err, deletedPortfolio) =>{
        if (err) return res.status(500).send(err);
        return res.send(deletedPortfolio);
    })
});

module.exports = portfolioRoutes;