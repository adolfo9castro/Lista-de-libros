(function(){
	'use strict';
	angular.module('apiBook',[]);

	var apl = angular.module('apiBook');

	apl.controller("mainController",['$scope','$http', function(s,h){
		s.formData = {};

		h.get('/api/books')
			.success(function(data) {
				s.books = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});

		s.createBook = function() {
			h.post('/api/books', s.formData)
			.success(function(data) {
				s.formData = {};
				s.books = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});
		}

		s.deleteBook = function(id) {
			h.delete('/api/books/' + id)
			.success(function(data) {
				s.books = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});
		}

		//authors
		h.get('/api/authors')
			.success(function(data) {
				s.authors = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});

		s.createAuthor = function() {
			h.post('/api/authors', s.formData)
			.success(function(data) {
				s.formData = {};
				s.authors = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});
		}

		s.deleteAuthor = function(id) {
			h.delete('/api/authors/' + id)
			.success(function(data) {
				s.authors = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error' + data);
			});
		}

	}]);
}());
