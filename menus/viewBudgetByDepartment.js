const inquirer = require("inquirer");
const queries = require("../db/queries");
const promptForDepartment = require("../utils/promptForDepartment");

async function viewBudgetByDepartmentMenu() {
  // Prompt user to select a department
  const departmentId = await promptForDepartment(
    "Select a department to view its budget:"
  );

  // Fetch budget for the selected department
  const budgetData = await queries.viewBudgetByDepartment(departmentId);

  // Display the result
  if (budgetData && budgetData[0] && budgetData[0][0]) {
    console.log(
      `Total utilized budget for ${budgetData[0][0].department}: $${budgetData[0][0].total_budget}`
    );
  } else {
    console.log("Unable to fetch the budget for the selected department.");
  }
}

module.exports = viewBudgetByDepartmentMenu;
