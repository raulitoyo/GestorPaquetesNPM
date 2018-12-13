var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

    //response.writeHead(200, {"Content-Type": "text/html"});
    //response.end("<button type='button' class='btn btn-primary btn-lg'>Abrir</button>");
    fs.readFile('inicio.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
});

var port = 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

