var http = require('http');

http.createServer(function (req, res){
  res.write('Hello Seung woo');
  res.end();
}).listen(8080);
