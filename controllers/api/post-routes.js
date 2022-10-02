const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        })
            .then(dbNewPostData =>{ 
                res.json(dbNewPostData)
                console.log(dbNewPostData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

// router.delete('/:id', async (req, res) => {
//     try {
//         const projectData = await Project.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!projectData) {
//             res.status(404).json({ message: 'No project found with this id!' });
//             return;
//         }

//         res.status(200).json(projectData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;