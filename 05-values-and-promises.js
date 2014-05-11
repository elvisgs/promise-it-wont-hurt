var q = require('q');

var dfd = q.defer();

function attachTitle(name) {
	return 'DR. ' + name;
}

dfd.promise.then(function(res) {
	return attachTitle(res);
}).then(function(res) {
	console.log(res);
});

dfd.resolve('MANHATTAN');