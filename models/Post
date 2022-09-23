const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');


class Post extends Model {}

Post.init(
    {
        id:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        posting_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: id
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    }
);

module.exports = Post;
