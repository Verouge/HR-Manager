const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "your_database_name",
});

const db = connection.promise();

module.exports = db;
