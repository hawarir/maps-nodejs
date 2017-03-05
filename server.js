var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static('src/client/static'));

app.listen(3000, function() {
  console.log('app running on localhost:3000');
});
