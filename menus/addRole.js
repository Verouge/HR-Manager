const inquirer = require("inquirer");
const promptForDepartment = require("../utils/promptForDepartment");
const queries = require("../db/queries");

async function addRole() {
  const roleDetails = await inquirer.prompt([
    { name: "title", message: "Enter role title:" },
    { name: "salary", message: "Enter role salary:", type: "number" },
  ]);

  roleDetails.department_id = await promptForDepartment(
    "Select the department for this role:"
  );

  await queries.addRole(roleDetails);
  console.log("Role added!");
}

module.exports = addRole;
