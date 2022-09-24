const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Comment = require('./Comment');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
        }
    );
    
module.exports = Comment;