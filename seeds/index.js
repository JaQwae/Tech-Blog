// Seeds requires
const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedALL = async () => {
    await sequelize.sync({ focre: true});

    await seedPost();

    await seedUser(); 
};

seedALL();