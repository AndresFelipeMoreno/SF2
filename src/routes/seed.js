const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/addseed', (req, res) => {
    res.render('seeds/addseed');
});

router.post('/addseed', async (req, res) => {
    const { name , description, quantityAvailable, priceKg, cultivationTown } = req.body;
    const newSeed = {
        name,
        description,
        quantityAvailable,
        priceKg,
        cultivationTown
    };
    await pool.query('INSERT INTO seed set ?', [newSeed]);
    res.send('received')
});

module.exports = router;