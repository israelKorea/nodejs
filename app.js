var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', function(req, res){
  res.send('Hello World! ~!!');
});
app.get('/route', function(req, res){
  res.send('hi, Route <img src="/aws.png">');
});
app.get('/dynamic', function(req, res){
var lis = '';
for(var i=0; i<5; i++){
  lis = lis + '<li>coding</li>';
}
  var output = `
<!DOCTYPE html>
<html>
 <head>
    <meta charset="utf-8">
 </head>
 <body>
    Welcome to my first dynamic webapp
    <ul>
      ${lis}
    </ul>
 </body>
</html>
`;
  res.send(output);
});
app.get('/template', function(req, res){
  res.render('temp', {time: Date(), _title:'JadeTemplate'});
});
app.get('/haeyoon', function(req,res){
  res.render('haeyoon', {_nm:'Johaeyoon'});
});

app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});
app.listen(3000, function(){
  console.log('example app listening on port 3000!');
});
