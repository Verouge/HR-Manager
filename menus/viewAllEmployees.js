const queries = require("../db/queries");

async function viewAllEmployees() {
  const employees = await queries.viewAllEmployees();
  console.table(employees[0]);
}

module.exports = viewAllEmployees;
