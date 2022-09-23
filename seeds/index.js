// Seeds requires
const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedALL = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPost();
    console.log('\n----- POST SEEDED -----\n');

    await seedUser(); 
    console.log('\n----- USER SEEDED -----\n');
    process.exit(0)
};

seedALL();