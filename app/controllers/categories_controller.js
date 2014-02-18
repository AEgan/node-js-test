/*
 * Categories controller
 *
 */
var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

exports.index = function(req, res) {
	res.render("categories/index");
}