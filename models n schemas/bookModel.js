'use strict';

var mongoose = require('mongoose');
var bookSchema = require('./bookSchema').bookSchema;

var models = {
	Book: mongoose.model('Book',bookSchema)
};

module.exports = models;
