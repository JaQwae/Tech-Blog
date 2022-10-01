const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// Route to get all post and generate homepage
router.get('/', async (req, res) => {
    try {
        
        const dbPostData = await Post.findAll();
        
        // Serialize user data so templates can read it
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

// create routes for individual post
router.get('/post/:id', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['content']
                }
            ],
        });

        const post = dbPostData.get({ plain: true });
        console.log(post)
        post.logged_in = req.session.logged_in
        res.render('singlePost', { post, loggedIn: req.session.loggedIn });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        const loginStatus = await req.session.loggedIn
        //If a session exists, redirect the request to the homepage
        if (loginStatus) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;