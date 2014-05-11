var http = require('q-io/http');

http.read('http://localhost:7000').then(function(buf) {
	return http.read('http://localhost:7001/' + buf);
}).then(function(buf) {
	var user = JSON.parse(buf);
	console.log(user);
}).then(null, console.error).done();