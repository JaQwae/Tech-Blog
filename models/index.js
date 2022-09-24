const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});

module.exports = {User, Post, Comment};