const promptForManager = require("../utils/promptForManager");
const queries = require("../db/queries");

async function viewEmployeesByManager() {
  // Use the utility function to get the managerId
  const managerId = await promptForManager();

  // Use the managerId to get employees by that manager
  const employees = await queries.viewEmployeesByManager(managerId);

  console.table(employees[0]);

  return employees[0];
}

module.exports = viewEmployeesByManager;
