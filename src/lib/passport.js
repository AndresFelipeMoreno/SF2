const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signup', new LocalStrategy({
    //usernameField: 'nombre',
    //passwordField: 'password',
    passReqToCallback: true
}, async (req,done) => {
    console.log(req.body);
    /*const {email} = req.body;
    const {telefono} = req.body;
    const {departamento} = req.body;
    const {municipio} = req.body;

    const newUser = {
        username,
        email,
        password,
        telefono,
        departamento,
        municipio
    };
    //newUser.password = await helpers.encryptPassword(passport);
    console.log(newUser);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    console.log(result);*/
}));