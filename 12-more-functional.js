var http = require('q-io/http');
var _ = require('lodash');

http.read('http://localhost:7000')
	.then(function(buf) {
		return http.read('http://localhost:7001/' + buf);
	})
	.then(_.compose(console.log, JSON.parse))
	.then(null, console.error).done();