module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

	// categories routes
	var categories_controller = require('../app/controllers/categories_controller');
	app.get('/categories', categories_controller.index);
};
