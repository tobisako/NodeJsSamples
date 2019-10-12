var http = require('http')
var server = http.createServer()

server.on('request', function(req, res) {
    var now = new Date()
    console.log("[" + now.getSeconds() + "] log output")
    res.writeHead(200, {'Content-Type': 'text/plain'});　
    res.write('hello world');
    res.end();
  })
server.listen(3000, 'localhost')

