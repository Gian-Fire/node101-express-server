// import files and packages up here
var data = require('./data.json');
var morgan = require('morgan');

// create your express server below
var express = require('express');
var app = express();

// add your routes and middleware below
app.use(express.static('../startnow-web101-san-diego-top-spots/'));
app.get('/', function(req, res) {
    res.status(200).send('oh, its working...');
});

app.get('/data', function(req, res) {
    res.status(200).send(data);
});
// finally export the express application
module.exports = app;
