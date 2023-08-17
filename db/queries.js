const db = require("./connection");

class DBQueries {
  viewAllDepartments() {
    return db.query("SELECT * FROM department");
  }

  // Add more methods for other queries...
}

module.exports = new DBQueries();
