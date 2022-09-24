const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();

        // return post of the 1 index
        // console.log(dbPostData[0].dataValues)
        // returns post title of the 1 index
        // console.log(dbPostData[0].dataValues.title)
        // returns post date created of the 1 index
        // console.log(dbPostData[0].dataValues.createdAt)
        
        res.render('homepage', dbPostData);

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