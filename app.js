var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World! ~!!');
});
app.get('/route', function(req, res){
  res.send('hi, Route <img src="/aws.png">');
});

app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});

app.use(express.static('public'));
app.listen(3000, function(){
  console.log('example app listening on port 3000!');
});
