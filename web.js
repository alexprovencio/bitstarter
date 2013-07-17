var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var readBuff = fs.readFileSync('index.html');

var theText = readBuff.toString();

app.get('/', function(request, response) {
  response.send(theText);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
