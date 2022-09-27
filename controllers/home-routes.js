const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        // Get all post
        const dbPostData = await Post.findAll();
        

        // Serialize user data so templates can read it
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        console.log(posts);
        // Pass serialized post data into Handlebars.js template
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });

        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
})

// dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
    try{
        res.send ('Dashboard route established');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// create routes for individual post

router.get('/login', async (req, res) => {
    try {
        //If a session exists, redirect the request to the homepage
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;