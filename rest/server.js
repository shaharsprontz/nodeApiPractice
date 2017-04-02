// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test')

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log('Index tool');
})


// Start server
app.listen(3000);
console.log('API is running on port 3000');

