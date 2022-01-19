const mysql = require('mysql2');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'Your user',
    password : 'Your password',
    database : "Database's name"
  });

db.connect();

module.exports = db;

