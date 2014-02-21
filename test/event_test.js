var should = require('should');
var mongoose = require('mongoose');
var category_model = require('../app/models/category');
var test_db = mongoose.connect('mongodb://localhost/test-test');
var Category = mongoose.model('Category');


after(function(done) {
	test_db.connection.db.dropDatabase(function(){
		test_db.connection.close(function(){
	  	done();
		});
	});
});

describe('Category', function(){
	beforeEach(function(done) {
		Category.remove(done);

		testCat = {
			name: "Game",
			active: true
		};


	});

	after(function(done) {
		Category.remove(done);
	});

	describe('#save()', function(){
		var category_object;
		beforeEach(function(done) {
			category_object = new Category(testCat);
			category_object.save(done);
		});

		it('test1: should have properties', function(done) {
			category_object.save(function(err, returned) {
				should.not.exist(err);
				returned.should.have.property('name', 'Game');
				returned.should.have.property('active', true);
				done();
			});
		});
	});
});