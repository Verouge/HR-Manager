const inquirer = require("inquirer");
const queries = require("../db/queries");
const promptForEmployee = require("../utils/promptForEmployee");
const promptForManager = require("../utils/promptForManager");

async function updateEmployeeManager() {
  // Prompt user to select an employee
  const employeeId = await promptForEmployee(
    "Which employee's manager would you like to update?"
  );

  // Prompt user to select the new manager for the chosen employee
  const newManagerId = await promptForManager();

  // Update the database
  await queries.updateEmployeeManager(employeeId, newManagerId);

  console.log("Employee's manager updated successfully!");
}

module.exports = updateEmployeeManager;
