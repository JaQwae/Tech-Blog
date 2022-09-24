const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

module.exports = {User, Post, Comment};