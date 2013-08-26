// Define routes for simple SSJS web app. 
// Writes Coinbase orders to database.
var async   = require('async')
  , express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https')
  ;

var app = express();
port=process.env.PORT || 8080;
//app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname));
// Render homepage (note trailing slash): example.com/
app.get('/', function(request, response) {
  var data = fs.readFileSync('main.html').toString();
  response.send(data);
});
app.listen(port, function() {
  console.log("Listening on " + port);})



