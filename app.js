/**
 * Module dependencies.
 */
var express = require('express'),
	port = 8082,
	fs = require('fs'),
	app = module.exports = express();

/**
 * App configuration.
 */
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.favicon());
app.use(app.router);
app.use('/src', express.static(__dirname + '/src'));

app.configure('development', function () {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
	app.use(express.errorHandler());
});


/**
 * Routes
 */
// Index
app.get('/', function(req, res) {
    fs.readFile(__dirname + '/landing.html', 'utf8', function (err, text) {
        res.send(text);
    });
});

/**
 * Listen
 */
app.listen(port);
console.log('Express app started on port ' + port);
