const router = require('express').Router();

const userRoutes = require('./user-routes');
const comment = require('./comment');

router.use('/user', userRoutes);

module.exports = router;