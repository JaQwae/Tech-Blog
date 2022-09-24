const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



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
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        posting_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Comment,
                key: 'id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
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
