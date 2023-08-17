const inquirer = require("inquirer");
const queries = require("../db/queries");

async function promptForDepartment(message) {
  const departments = await queries.viewAllDepartments();
  const departmentChoices = departments[0].map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));

  const { departmentId } = await inquirer.prompt({
    type: "list",
    name: "departmentId",
    message: message,
    choices: departmentChoices,
  });

  return departmentId;
}

module.exports = promptForDepartment;
