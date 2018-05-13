var express = require('express');
var app = express();
var url = require('url');
var sizeOf = require('image-size');
var imgUrl = 'https://cdn-images-1.medium.com/max/2000/1*bD-kWXVqJO_yksiGsIJpxw.png';
var options = url.parse(imgUrl);
var gm = require('gm');

app.locals.pretty = true;
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.get('/', function(req, res){
  res.send('Hello World! ~!!');
});



app.get('/res', function(res){
  var chunks = [];
  res.on('data', function(chunks){
    chunk.push(chunks);
  }).on('end', function(){
    var buffer = Buffer.concat(chunks);
    console.log(sizeOf(buffer));
  });
});


app.get('/imgsize', function(req,res){
  gm(imgUrl).size(function(err, size){
    if(!err){
        console.log('width = ' + size.width);
        console.log('height = ' + size.height);  
      }
  });
});

app.get('/route', function(req, res){
  res.send('hi, Route <img src="">');
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
  res.render('haeyoon', {_nm:'Johaeyoon', _cnunt:'SouthKorea'});
});


app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});

app.listen(3000, function(){
  console.log('example app listening on port 3000!');
});
