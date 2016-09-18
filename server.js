var app = require('express')();
var http = require('http').createServer(app);
var port = 3001;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:3001');
});
