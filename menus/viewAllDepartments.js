const queries = require("../db/queries");

async function viewAllDepartments() {
  const departments = await queries.viewAllDepartments();
  console.table(departments[0]);
}

module.exports = viewAllDepartments;
