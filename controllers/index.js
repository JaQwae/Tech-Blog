const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/user-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;