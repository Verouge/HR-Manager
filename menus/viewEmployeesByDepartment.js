const queries = require("../db/queries");
const promptForDepartment = require("../utils/promptForDepartment");

async function viewEmployeesByDepartment() {
  const departmentId = await promptForDepartment(
    "Which department's employees would you like to view?"
  );
  const employeesByDepartment = await queries.viewEmployeesByDepartment(
    departmentId
  );
  console.table(employeesByDepartment[0]);
}

module.exports = viewEmployeesByDepartment;
