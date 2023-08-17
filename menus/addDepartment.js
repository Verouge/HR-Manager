const inquirer = require("inquirer");
const queries = require("../db/queries");

async function addDepartment() {
  const departmentDetails = await inquirer.prompt([
    { name: "name", message: "Enter department name:" },
  ]);
  await queries.addDepartment(departmentDetails);
  console.log("Department added!");
}

module.exports = addDepartment;
