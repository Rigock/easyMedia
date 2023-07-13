const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true    
}));

router.get('/profile', (req, res) => {
    res.send('Profile page')
})

module.exports = router;