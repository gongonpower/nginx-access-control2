var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	console.log('url', req.url);
	var pathname = url.parse(req.url, true).pathname;
	console.log('pathname', pathname);
	if ("/inquire1" === pathname) {
		var queryData = url.parse(req.url, true).query;
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end("<h1>test</h1>");
	} else {
		res.writeHead(404, {'Content-Type':'text/html'});
		res.end("<h1>not found</h1>");

	}
}
).listen(9000, function(){
console.log('listen at port 9000');
});
