const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

import pool from '../database';

const helpers = require('./helpers');
passport.use('local.signup', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const newUser = {
        fullname,
        username,
        password,
    };

    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users set ?', [newUser]);
}));