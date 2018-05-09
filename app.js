var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('public'));
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res){
  res.send('Hello World! ~!!');
});
app.get('/route', function(req, res){
  res.send('hi, Route <img src="/aws.png">');
});
app.get('/template', function(req, res){
  res.render('temp', {time: Date(), _title:'JadeTemplate'});
});
app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});
app.listen(3000, function(){
  console.log('example app listening on port 3000!');
});
