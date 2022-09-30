const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    try{
        if (req.session) {
            Comment.create({
                    comment_text: req.body.content,
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

    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }
});