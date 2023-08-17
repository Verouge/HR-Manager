const inquirer = require("inquirer");
const queries = require("../db/queries");

const promptForDepartment = require("../utils/promptForDepartment");
const promptForRole = require("../utils/promptForRole");
const promptForEmployee = require("../utils/promptForEmployee");

async function deleteEntities() {
  // 1. Choose entity type
  const { entityType } = await inquirer.prompt({
    type: "list",
    name: "entityType",
    message: "Which entity would you like to delete?",
    choices: ["Department", "Role", "Employee", "Back"],
  });

  switch (entityType) {
    case "Department":
      const departmentId = await promptForDepartment(
        "Select a department to delete:"
      );
      await queries.deleteDepartment(departmentId);
      console.log("Department deleted!");
      break;

    case "Role":
      const roleId = await promptForRole("Select a role to delete:");
      await queries.deleteRole(roleId);
      console.log("Role deleted!");
      break;

    case "Employee":
      const employeeId = await promptForEmployee(
        "Select an employee to delete:"
      );
      await queries.deleteEmployee(employeeId);
      console.log("Employee deleted!");
      break;
  }
}

module.exports = deleteEntities;
