const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        host:'au77784bkjx6ipju.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        }
    })
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}
module.exports = sequelize;


// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306,
//     }
// );

// module.exports = sequelize;

