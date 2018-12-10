var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<button type='button'>Abrir</button>");

});

var port = 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
