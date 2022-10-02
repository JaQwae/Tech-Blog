const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// dashboard route
router.get('/', withAuth, async (req, res) => {
    try {
        const dbDashboardData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
            ]
        })
        const posts = dbDashboardData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('dashboard', { posts, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const dbPostData = await Post.create({
//                 title: req.body.title,
//                 content: req.body.content,
//                 user_id: req.session.user_id
//             })
//         const newPosts = dbPostData.map(post => post.get({ plain: true }));
//         console.log(newPosts)
//         res.render('dashboard', { newPosts, loggedIn: true });

//     } catch(err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
// });

router.get('/new', (req, res) => {
    res.render('newPost');
});

module.exports = router