var http = require('http');

/*var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
 // res.send('Hello World!');
 console.log("Directory name is"+__dirname);
 res.sendFile(__dirname+"/index.html");
 //res.sendFile( __dirname + "/views/" + "index.html" );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/checkEndPoint', function(req, res) {
  console.log(req.body);
  res.sendStatus(200)
});