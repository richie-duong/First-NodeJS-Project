/**
 * IMPORTING ALL NECESSARY DEPENDENCIES:
 * Express: Web application framework
 * Express-Handlebars: The rendering engine
 * Body-Parser: Used to access POST data
 */
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

/**
 * Central place for database credentials
 */ 
require('dotenv').config();

/**
 * Port number for express server to listen on
 */
const port = process.env.PORT || 5000;

/**
 * Middleware for parsing bodies from URL
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Parse application/json
 */
app.use(bodyParser.json());

/**
 * Setting up the templating engine
 */
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

/**
 * Setting up the routes in express
 */
const routes = require('./server/routes/router')
app.use('/', routes);

/**
 * Bind the 'port' variable and listen connection on port 5000
 */
app.listen(port, () => console.log(`Server listening on port: ${port}`));