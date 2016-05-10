'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemas = {
	authorSchema: new Schema({
		name: {type: String},
		nationality: {type: String}
	})
};

module.exports = schemas;
