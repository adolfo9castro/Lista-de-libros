var express = require('express');
var router = express.Router();
var Book = require('../models n schemas/bookModel').Book;

router.get('/', function(req,res) {
	res.sendFile('index.html');
});

router.get('/api/books', function(req, res){
	Book.find(function(err, books) {
		if(err){
			console.log(err);
		}
		res.json(books);
	});
});

router.post('/api/books', function(req, res){
	Book.create({
		titulo: req.body.titulo,
		descripcion: req.body.descripcion,
		autor: req.body.autor,
		done: false
	}, function (err, book) {
		if(err){
			console.log(err);
		}
		Book.find(function(err, books) {
			if(err){
				console.log(err);
			}
			res.json(books);
		});
	});
});

router.delete('/api/books/:book', function(req,res){
	Book.remove({
		_id:req.params.book
	}, function(err, book) {
		if(err){
			console.log(err);
		}
		Book.find(function(err,books){
			if(err){
				console.log(err);
			}
			res.json(books);
		});
	});
});

module.exports = router;
