var q = require('q');

function parsePromised() {
	var dfd = q.defer();

	try {
		var json = JSON.parse(process.argv[2]);
		dfd.resolve(json);
	} catch(e) {
		dfd.reject(e);
	}

	return dfd.promise;
}

parsePromised().then(parsePromised).then(null, console.log);