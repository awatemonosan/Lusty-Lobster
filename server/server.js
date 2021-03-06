var mongoose = require('mongoose');
//mongoose.connect();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/rabbithole');

var express  = require('express');
var app = express();
require('./middleware.js')(app, express);

module.exports = app;