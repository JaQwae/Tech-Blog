// Seeds requires
const sequelize = require('../config/connection');
const seedPost = require('./postData');

const seedALL = async () => {
    await sequelize.sync({ focre: true});

    await seedPost();
};

seedALL();