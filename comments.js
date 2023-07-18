// Create web server application
// 1. Create web server
// 2. Set up routing
// 3. Set up template engine
// 4. Set up static file service
// 5. Parse POST request
// 6. Bind port

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

// Set up template engine
app.engine('html', require('express-art-template'));

// Set up static file service
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));

// Parse POST request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up router
app.use(router);

// Bind port
app.listen(3000, function () {
  console.log('running...');
});