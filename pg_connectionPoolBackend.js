var Pool = require('pg').Pool;
var options = {
	host: 'localhost',
	port: '5432',
	database: 'postgres',
	user: 'postgres',
	password: '',
	max: 10, // maximum number of client in a pool
	idleTimeoutMillis: 1000,
};
var pool = new Pool(options);
pool.on('error', function(e, client) {
	console.error('Error: ' + e + ' in ' + client);
});
pool.query('select * from users', [], function(error, result){
	console.log(result);
});