const router = require('express').Router()
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
        if (req.session) {
            Comment.create({
                    comment_content: req.body.content,
                    post_id: req.body.post_id,
                    user_id: req.session.user_id,
            })
                .then(dbCommentData => res.json(dbCommentData))
                console.log(dbCommentData)
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                })
        }
});

module.exports = router;