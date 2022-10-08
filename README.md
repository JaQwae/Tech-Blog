# Tech Blog

## Description:
This application is a blog site that is similar to a Wordpress site, where users can post any and everything tech. The app follows the MVC paradigm.

## Table of Contents:
### [Installation](#installation)
### [Usage](#usage)
### [Contributors](#contributors)
### [Licenses](#licenses)
### [Tests](#tests)
### [Questions](#questions)

## Installation:
To run this application, you must complete the following steps:
  - First, download node.js and vs code.
  -  Second, open the corresponding terminal for this program.
  -  Third, input these commands in the terminal: ```npm i```, and ```mysql -u root -p```.
  - Next, input ```SOURCE``` with the corresponding schema file, then put ```quit``` in the mysql terminal
  - Then make sure your database name, username, and password match in the .env file (if no .env  file create one). 
  - Lastly, input ```npm run seeds``` then ```npm run start``` in the terminal to initiate the application
  
  If all steps above are completed correctly, then the application should generate a local tech blog website.

## Usage:
![site homepage screen shot](./images/techBlog%20Screenshot.png)

### Features:
#### Notable features of this project includes:
	- User can 
		- create, update, and delete post.
		- posts comment on post
	- Login
		- saves user and password in a database
		- total password encryption

	
#### Future feature implementation includes:

	- UI will be heavy update for a smoother user experience.
	- Adding tests to ensure the integrity of the models
	- Ability to like, dislike, and share post
	- Ability to delete comments

#### Technologies use:
    - Npm Handlebars.js is the templating language
    - Sequelize is the ORM
    - Express-session and bcrypt was used for authentication. 
    - API Routes to perform RESTful CRUD operations


## Contributors:
- JaQwae Ellison

## Licenses:
None

## Tests:
None 

## Questions:
### Contact me here:
GitHub: https://github.com/Jaqwaee
Email: jaqwaeellison@gmail.com