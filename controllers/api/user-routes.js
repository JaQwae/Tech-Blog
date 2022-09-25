const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        // find user who matched the search
        const userData = await User.findOne({ where: { name: req.body.name } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return
        }

        // verifies is password matches search
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        // Create session variables
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;