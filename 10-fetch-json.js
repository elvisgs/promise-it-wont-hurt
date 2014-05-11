var http = require('q-io/http');

http.read('http://localhost:1337').then(function(buf) {
	var json = JSON.parse(buf.toString());
	console.log(json);
});