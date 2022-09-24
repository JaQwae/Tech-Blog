// Seeds requires
const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData')

const seedALL = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser(); 
    console.log('\n----- USER SEEDED -----\n');

    await seedComment();
    console.log('\n----- COMMENT SEEDED -----\n');

    await seedPost();
    console.log('\n----- POST SEEDED -----\n');

    process.exit(0)
};

seedALL();