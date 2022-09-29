// Seeds requires
const sequelize = require('../config/connection');
const userData = require('./userData');
const { User } = require('../models');
const seedComment = require('./commentData')

const postData = require('./postData');
const { Post } = require('../models');

const seedALL = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USER SEEDED -----\n');

    await seedComment();
    console.log('\n----- COMMENT SEEDED -----\n');

    await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- POST SEEDED -----\n');

    process.exit(0)
};

seedALL();