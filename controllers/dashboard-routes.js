const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// dashboard route
router.get('/', withAuth, async (req, res) => {
    try{
        res.send ('Dashboard route established');
        // res.render('dashboard', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router