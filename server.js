var express = require('express'),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	path = require('path'),
	methodOverride = require('method-override'),
	app = express();

mongoose.connect('mongodb://localhost:27017/angular-book');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());

var index = require(__dirname + '/controllers n routes/index.js');
app.use('/', index);
app.listen(8000, function () {
	console.log('Servidor arriba en el puerto 8000');
});
