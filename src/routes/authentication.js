const express = require('express');
const router = express.Router();
const db = require('../database');

const passport = require('passport');

router.get('/signin', (req, res) => {
  res.render('auth/signin');
  });

router.post('/signin', (req, res) => {
  console.log(req.body);
  res.send("sesion recibido")
});

router.get('/signup', (req, res) =>{
  res.render('auth/signup');
});

router.post('/signup', async (req,res) =>{
  const {fullname, email, password, confirmation,phone, department, town} = req.body;
  const newUser = {
    fullname, email, password,phone, department, town
  }
  await db.query("INSERT INTO users set ?", [newUser], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  res.redirect("/login");
});


router.get('/profile', (req,res) =>{
  res.send('Tu perfil');
});

module.exports = router;