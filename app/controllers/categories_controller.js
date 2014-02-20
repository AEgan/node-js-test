/*
 * Categories controller
 *
 */
var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

/*
 * Simple 'error handling' function
 */
var doError = function(e) {
	util.debug("ERROR: " + error);
	throw new Error(error);
}

/*
 * Function for the categories index page
 */
exports.index = function(req, res) {
	Category.find(function(err, cats) {
		res.render("categories/index", {
			'categories': cats
		});
	});
}

/*
 * renders a page for a new category
 */
exports.new_category = function(req, res) {
	res.render("categories/new");
}

/*
 * attemps to insert a new category
 */
exports.create_category = function(req, res) {
	var category = new Category({
		name: req.body.name,
		active: req.body.active
	});
	category.save(function(err, created_object) {
		if(err) {
			res.render('categories/new', {
				error: "Name must not be blank"
			});
		}
		else {
			return res.redirect("categories");
		}
	});
}

/*
 * Category show page
 */
exports.show = function(req, res) {
  Category.findOne({'name': req.params.name}, function(err, category) {
  	if(err) {
			doError(err);
		}
		else if(!category) {
			res.render('404');
		}
		else {
			return res.render("categories/show", {
				'category': category
			});
		}
  });
}