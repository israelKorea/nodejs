var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended : false}));
app.locals.pretty = true;
app.set('views', 'views_file');
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.get('/topic/new', function(req, res){
	fs.readdir('data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
	res.render('new', {topics : files});
	})
	
});

app.get(['/topic', '/topic/:id'], function(req, res){
	fs.readdir('data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		
		var id = req.params.id;	
		//id 값이 있을 때
		if(id){
			fs.readFile('data/'+id, 'utf8', function(err, data){
				if(err){
				console.log(err);
				res.status(500).send('Internal Server Error');
				}
				res.render('view', {topics : files, title : id, desc : data});
			});
		}else{ //id값이 없을 때
			res.render('view' , {topics : files
				, title : 'Welcome to home'
				, desc : 'node web'});
		}
	})
});

app.post('/topic', function(req, res){
	var title = req.body.title;
	var description = req.body.description;
	fs.writeFile('data/'+ title,description, function(err){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.redirect('/topic/' + title);
	});	
});

app.listen(3000, function(){
	console.log('Server running on 3000 port!');
});