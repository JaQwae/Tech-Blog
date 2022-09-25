const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Get all post
        const dbPostData = await Post.findAll();

         // Serialize user data so templates can read it
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('homepage', { posts });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// change to individual later on
router.get('/post', async (req, res) => {
    try{
        res.send ('Post route established');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.send('Login route established')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})
module.exports = router;