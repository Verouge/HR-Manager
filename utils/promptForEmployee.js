const inquirer = require("inquirer");
const queries = require("../db/queries");

async function promptForEmployee(message) {
  const allEmployees = await queries.viewAllEmployees();
  const employeeChoices = allEmployees[0].map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));

  const selectedEmployee = await inquirer.prompt({
    type: "list",
    name: "employeeId",
    message: message,
    choices: employeeChoices,
  });

  return selectedEmployee.employeeId;
}

module.exports = promptForEmployee;
