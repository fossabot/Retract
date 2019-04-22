var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'ricky.heliohost.org',
  user: 'retract_Admin',
  password: 'FalconakaBlao',
  database: 'retract_db'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});

function searchDBfiles() {
  
}

function connectionEnd() {
  connection.end(function(err) {
    if (err) throw err
    console.log('You are now disconnected...')
  });
}
