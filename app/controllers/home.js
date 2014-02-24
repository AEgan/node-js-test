var mongoose = require('mongoose'),
  Article = mongoose.model('Article');
var mailer = require('../mailers/node_mailer');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
};

exports.send_mail = function(req, res) {
	mailer.sendMail(function() {
		res.render('home/index');
	});
}