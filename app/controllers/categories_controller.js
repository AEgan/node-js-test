/*
 * Categories controller
 *
 */
var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

exports.index = function(req, res) {
	Category.find(function(err, cats) {
		res.render("categories/index", {
			'categories': cats
		});
	});
}

exports.new_category = function(req, res) {
	res.render("categories/new");
}

exports.create_category = function(req, res) {
	var category = new Category({
		name: req.body.name,
		active: req.body.active
	});
	category.save(function(err, created_object) {
		if(err) {
			doError(err);
		}
		else {
			return res.redirect("categories");
		}
	});
}