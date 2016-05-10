'use strict';

var mongoose = require('mongoose');
var authorSchema = require('./authorSchema').authorSchema;

var models = {
	Author: mongoose.model('Author',authorSchema)
};

module.exports = models;
