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
    res.redirect('/seeds');
});

router.get('/', async (req,res) => {
    const seeds = await pool.query('SELECT * FROM seed')
    res.render('seeds/list', {seeds});
});

router.get('/delete/:idSeed', async (req,res) => {
    const {idSeed} = req.params;
    await pool.query('DELETE FROM seed WHERE idSeed = ?', [idSeed]);
    res.redirect('/seeds');
})

module.exports = router;