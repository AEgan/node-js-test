module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

	// categories routes
	var categories_controller = require('../app/controllers/categories_controller');
	app.get('/categories', categories_controller.index);
	app.get('/categories/new', categories_controller.new_category);
	app.post('/categories/new', categories_controller.create_category);
	app.get('/categories/:name', categories_controller.show);
};
