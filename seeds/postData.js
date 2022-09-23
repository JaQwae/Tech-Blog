const { Post } = require('../models');

const postData = [
    {
        title: 'New to tech',
        content: 'You must apply and face rejection before you shine!',
        posting_date: 'April 12, 2021',
        comment: 'Fight the gate keepers!',
        user_id: 1
    },
    {
        title: 'Pythons is the Future',
        content: 'Pythons mathematical engine is superior to any other language',
        posting_date: 'June 21, 2021',
        comment: 'Are you sure about that?',
        user_id: 2
    },
    {
        title: 'Networking',
        content: 'Do not be afraid to connect with new people,  you never know the opportunities/ relationships that will form out of a simple conversation.',
        posting_date: 'September 30, 2021',
        comment: 'Agreed!',
        user_id: 3
    },
    {
        title: 'Best coding bootcamps in 2021',
        content: 'Want to switch careers in a timely manner considering undertaking a coding bootcamp to do so...',
        posting_date: 'December 01, 2021',
        comment: '',
        user_id: 1
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;