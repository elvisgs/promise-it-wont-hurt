var q = require('q');

var dfd = q.defer();

dfd.promise.then(console.log);

dfd.resolve('SECOND');

console.log('FIRST');