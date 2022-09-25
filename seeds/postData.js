const { Post } = require('../models');

const postData = [
    {
        title: 'New to tech',
        content: 'You must apply and face rejection before you shine!',
        comment_id: 1,
        user_id: 1
    },
    {
        title: 'Pythons is the Future',
        content: 'Pythons mathematical engine is superior to any other language',
        comment_id: 2,
        user_id: 2
    },
    {
        title: 'Networking',
        content: 'Do not be afraid to connect with new people,  you never know the opportunities/ relationships that will form out of a simple conversation.',
        comment_id: 3,
        user_id: 3
    },
    {
        title: 'Best coding bootcamps in 2021',
        content: 'Want to switch careers in a timely manner considering undertaking a coding bootcamp to do so...',
        user_id: 1
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;