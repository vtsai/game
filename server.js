var express = require('express');
 
var server = express();
var port = process.env.PORT || 8080;

//server.use(express.static(__dirname + '/'));

// Configuration
server.configure(function(){
	server.use(express.static(__dirname + '/app'));
	server.use(express.bodyParser());
	server.use(express.methodOverride());

	// LESS Support
	//app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
	// Template-enabled html view (by jade)
	// http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express
	//app.set('views', __dirname + '/app/views');
	//app.register('.html', require('jade'));
	
	//Error Handling
	server.use(express.logger());
	server.use(express.errorHandler({
		dumpExceptions: true, 
		showStack: true
	}));
	
	//Setup the Route, you are almost done
	server.use(server.router);
});

server.get('/', function (req, res) {
//  res.sendFile(__dirname+'/index.html');
  res.redirect('/index.html');
});
 
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
