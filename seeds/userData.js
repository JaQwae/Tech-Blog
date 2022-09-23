const { User } = require('../models');

const userData = [
    {
        name: 'Jay',
        password: '1234'
    },
    {
        name: 'Sun',
        password: '4321'
    },
    {
        name: 'Carlo',
        password: 'abcd'
    },
    {
        name: 'Eric',
        password: 'a1b2c3d4'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;