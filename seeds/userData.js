const { User } = require('../models');

const userData = [
    {
        username: 'Jay',
        password: '1234'
    },
    {
        username: 'Sun',
        password: '4321'
    },
    {
        username: 'Carlo',
        password: 'abcd'
    },
    {
        username: 'Eric',
        password: 'a1b2c3d4'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;