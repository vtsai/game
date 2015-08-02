var express = require('express');
 
var server = express();
var oneDay = 86400000;
var port = process.env.PORT || 8080;

server.get('/', function(request, response) {
    response.sendfile(__dirname + '/dist/index.html');
}).configure(function() {
    server.use('/', express.static(__dirname + '/dist/'));
}).listen(port);
