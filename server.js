var express = require('express');
 
var server = express();
var oneDay = 86400000;

server.use(express.static(__dirname + '/dist', { maxAge: oneDay }));
//server.use(express.static(__dirname + '/mewzy'));
 
var port = process.env.PORT || 8080;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
