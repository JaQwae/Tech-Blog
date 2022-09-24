const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.send ('Homepage routes established')

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