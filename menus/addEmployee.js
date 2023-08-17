const inquirer = require("inquirer");
const promptForRole = require("../utils/promptForRole");
const promptForManager = require("../utils/promptForManager");
const queries = require("../db/queries");

async function addEmployee() {
  const employeeBasicDetails = await inquirer.prompt([
    { name: "first_name", message: "Enter employee's first name:" },
    { name: "last_name", message: "Enter employee's last name:" },
  ]);

  employeeBasicDetails.role_id = await promptForRole(
    "Select the role for this employee:"
  );
  employeeBasicDetails.manager_id = await promptForManager(
    "Select the manager for this employee:"
  );

  await queries.addEmployee(employeeBasicDetails);
  console.log("Employee added!");
}

module.exports = addEmployee;
