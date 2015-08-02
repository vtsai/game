var express = require('express');
 
var server = express();
var port = process.env.PORT || 8080;

//server.use(express.static(__dirname + '/'));

server.use(express.static(__dirname + '/app'));

server.get('/', function (req, res) {
//  res.sendFile(__dirname+'/index.html');
  res.redirect('/');
});
 
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
