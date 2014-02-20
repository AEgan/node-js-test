var should = require('should');
var mongoose = require('mongoose');
var category_model = require('../app/models/category');
var test_db = mongoose.connect('mongodb://localhost/test-test');
var Category = mongoose.model('Category');


after(function(done) {
	test_dbconnection.db.dropDatabase(function(){
		test_db.connection.close(function(){
	  	done();
		});
	});
});

describe('Event', function(){
	console.log('here');
});