const {Comment} = require('../models');

commentData = [
    {
        content: 'Fight the gate keepers!'
    },
    {
        content: 'Are you sure about that?'
    },
    {
        content:  'Agreed!'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

