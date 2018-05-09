const http = require('http');
const host = '192.168.0.49'; 
const port = 3000;

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Hello world!');
});

server.listen(port, host, function(){
  console.log('Server running at ${host}:${port}');
});
