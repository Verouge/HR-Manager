const inquirer = require("inquirer");
const queries = require("../db/queries");

async function promptForRole(message) {
  const allRoles = await queries.viewAllRoles();

  const roleChoices = allRoles[0].map((role) => ({
    name: role.title,
    value: role.id,
  }));

  const { role_id } = await inquirer.prompt([
    {
      type: "list",
      name: "role_id",
      message: message,
      choices: roleChoices,
    },
  ]);

  return role_id;
}

module.exports = promptForRole;
