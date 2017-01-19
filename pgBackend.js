var pg = require('pg');
var connectionString = 'postgres://postgres:5432@localhost/postgres';
pg.connect(connectionString, function(err, client, done) {
	if (err) {
		console.error(err);
		return;
	}
	client.query("select * from users", function(err, result) {
		if (err) {
			console.error(err);
			client.end();
		}
		console.log(result);
		client.end();
	});
});