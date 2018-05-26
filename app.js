var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var rt = '/';
var rut = '/route';
var dym = '/dynamic';
var temp = '/template';
var lg = '/login';
var form = '/form';
var form_rec = '/form_receiver';
var topic = '/topic';

app.locals.pretty = true;
app.engine('pug', require('pug').__express);
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

app.get(rt, function(req, res){
  res.render('rootpage', {
			_url1 : rt
			, _url2 : rut
			, _url3 : dym
			, _url4 : temp
			, _url5 : lg 
			, _ur16 : form
			, _ur17 : form_rec
			, _ur18 : topic
  });
});

app.get(topic, function(req, res){
	var topics = [
		'javascript'
		, 'nodejs'
		, 'express'
	];
	var output = `
		<a href="/topic?id=0">javascript</a><br>
		<a href="/topic?id=1">nodejs</a><br>
		<a href="/topic?id=2">express</a><br><br>
		${topics[req.query.id]}
	`
	res.send(output);
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

app.get(form, function(req, res){
 res.render('form'); 
});


app.get(form_rec, function(req, res){
	res.send('Hello, GET');
	var title = req.query.title;
	var description = req.query.description;
	res.send(title+',' + description);
});



app.post(form_rec, function(req, res){
	/*
	var title = req.body.title;
	var description = req.body.description;
	res.send(title +','+ description);
	*/
	res.send(req.body);
});


app.get(rut, function(req, res){
  res.send('hi, Route <img src="">');
});


app.get(dym, function(req, res){
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

app.get(temp, function(req, res){
  res.render('temp', {time: Date(), _title:'JadeTemplate'});
});

app.get(lg, function(req, res){
  res.send('<h1>login please</h1>');
});

app.listen(3000, function(){
  console.log('example app listening on port 3000!');
});
