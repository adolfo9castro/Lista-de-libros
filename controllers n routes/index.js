var express = require('express');
var router = express.Router();
var Book = require('../models n schemas/bookModel').Book;
var Author = require('../models n schemas/authorModel').Author;

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
		author: req.body.author,
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


router.get('/api/authors', function(req, res){
	Author.find(function(err, authors) {
		if(err){
			console.log(err);
		}
		res.json(authors);
	});
});

router.post('/api/authors', function(req, res){
	Author.create({
		name: req.body.name,
		nationality: req.body.nationality,
		done: false
	}, function (err, author) {
		if(err){
			console.log(err);
		}
		Author.find(function(err, authors) {
			if(err){
				console.log(err);
			}
			res.json(authors);
		});
	});
});

router.delete('/api/authors/:author', function(req,res){
	Author.remove({
		_id:req.params.author
	}, function(err, author) {
		if(err){
			console.log(err);
		}
		Author.find(function(err,authors){
			if(err){
				console.log(err);
			}
			res.json(authors);
		});
	});
});

module.exports = router;
