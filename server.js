/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/*
*
*/
var index = function(req, res){
  res.render('index');
};

var partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, 'app')));
};

// production only
if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', index);
app.get('/partials/:name', partials);


// redirect all others to the index (HTML5 history)
app.get('*', index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});