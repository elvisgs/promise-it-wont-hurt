var q = require('q');

var dfd1 = q.defer();
var dfd2 = q.defer();

function all(p1, p2) {
	var dfd = q.defer();
	var count = 0;
	var values = [];

	var fulfill = function(value) {
		count++;
		values.push(value);
		if (count === 2) {
			dfd.resolve(values);
		}
	};

	var fail = function(e) {
		dfd.reject(e);
	};

	p1.then(fulfill).then(null, fail);
	p2.then(fulfill, fail).then(null, fail);

	return dfd.promise;
}

all(dfd1.promise, dfd2.promise).then(console.log);

setTimeout(function() {
	dfd1.resolve('PROMISES');
	dfd2.resolve('FTW');
}, 200);