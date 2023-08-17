const inquirer = require("inquirer");
const queries = require("../db/queries");

async function promptForManager(message) {
  const allManagers = await queries.viewAllEmployees();

  const managerChoices = allManagers[0].map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));

  // Adding an option for no manager
  managerChoices.push({ name: "None", value: null });

  const { manager_id } = await inquirer.prompt([
    {
      type: "list",
      name: "manager_id",
      message: message,
      choices: managerChoices,
    },
  ]);

  return manager_id;
}

module.exports = promptForManager;
