const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "HR_db",
});

const db = connection.promise();

module.exports = db;
