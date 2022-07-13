const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = connection;