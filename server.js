// npm requires
const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');

// file/folder requires
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Init App
const app = express();

// Set Port
const PORT = process.env.PORT || 3001;

// Handlebars middleware
const hbs = exphbs.create({ helpers });
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Links to the controllers
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});