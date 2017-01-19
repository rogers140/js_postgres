var Q = require('q');
var pg_promise = require('pg-promise')({promiseLib: Q});
var connection = {
	host: 'localhost',
	port: '5432',
	database: 'postgres',
	user: 'postgres',
	password: ''
};
var db = pg_promise(connection);
console.log('Database created.');
db.any("select * from users", [true])
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.log(error);
	})
	.done();