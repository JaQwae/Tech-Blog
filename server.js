// Requires
const path = require('path');
const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./helpers');

// Calling express and establishing a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Links to the controllers
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});