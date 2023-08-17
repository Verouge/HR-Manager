const inquirer = require("inquirer");
const queries = require("../db/queries");

async function updateEmployeeRole() {
  const allEmployees = await queries.viewAllEmployees();

  const employeeChoices = allEmployees[0].map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));

  const selectedEmployee = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role would you like to update?",
      choices: employeeChoices,
    },
  ]);

  const roles = await queries.viewAllRoles();

  const roleChoices = roles[0].map((role) => ({
    name: role.title,
    value: role.id,
  }));

  const selectedRole = await inquirer.prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role do you want to assign to the employee?",
      choices: roleChoices,
    },
  ]);

  await queries.updateEmployeeRole(
    selectedEmployee.employeeId,
    selectedRole.roleId
  );

  console.log(
    `Updated role for ${selectedEmployee.employeeId} to ${selectedRole.roleId}!`
  );
}

module.exports = updateEmployeeRole;
