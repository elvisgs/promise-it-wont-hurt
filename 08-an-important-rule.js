var q = require('q');

function throwMyGod() {
	throw new Error('OH NOES');
}

function iterate() {
	var i = arguments[0];
	console.log(i);
	return i + 1;
}

q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);