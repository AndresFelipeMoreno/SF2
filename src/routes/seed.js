const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/addseed', (req, res) => {
    res.render('seeds/addseed');
});

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('received')
});

module.exports = router;