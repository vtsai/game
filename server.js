var express = require('express');
 
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/'));

server.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});
 
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
