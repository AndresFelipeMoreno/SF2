const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/addseed', (req, res) => {
    res.render('seeds/addseed');
});

module.exports = router;