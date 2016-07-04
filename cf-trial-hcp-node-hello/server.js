var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// Send the response body
	response.end('Hello Cloud Foundry HCP trial world!\n');
}).listen(port);

// Console will print the message
console.log('port: ' + port);