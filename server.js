var express = require('express');
 
var server = express();
var oneDay = 86400000;
process.env.PWD = process.cwd()

//server.use(express.static(__dirname + '../dist', { maxAge: oneDay }));
server.use(express.static(process.env.PWD + '/dist', { maxAge: oneDay }));

server.get('/', function (req, res) {
//  res.sendFile(__dirname+'../dist/index.html');
  res.sendFile(process.env.PWD+'/dist/index.html');
});
 
var port = process.env.PORT || 8080;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
