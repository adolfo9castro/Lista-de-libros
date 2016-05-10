'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemas = {
	bookSchema: new Schema({
		titulo: {type: String},
		descripcion: {type: String},
		autor:{type: String}
	})
};

module.exports = schemas;
