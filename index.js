const inquirer = require("inquirer");
const queries = require("./db/queries");

const viewAllEmployees = require("./menus/viewAllEmployees");
const addEmployee = require("./menus/addEmployee");
const updateEmployeeRole = require("./menus/updateEmployeeRole");
const viewAllRoles = require("./menus/viewAllRoles");
const addRole = require("./menus/addRole");
const viewAllDepartments = require("./menus/viewAllDepartments");
const addDepartment = require("./menus/addDepartment");

async function mainMenu() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all employees",
      "Add employee",
      "Update employee role",
      "View all roles",
      "Add role",
      "View all departments",
      "Add department",
      "Exit",
    ],
  });

  switch (answer.action) {
    case "View all employees":
      await viewAllEmployees();
      await mainMenu();
      break;

    case "Add employee":
      await addEmployee();
      await mainMenu();
      break;

    case "Update employee role":
      await updateEmployeeRole();
      await mainMenu();
      break;

    case "View all roles":
      await viewAllRoles();
      await mainMenu();
      break;

    case "Add role":
      await addRole();
      await mainMenu();
      break;

    case "View all departments":
      await viewAllDepartments();
      await mainMenu();
      break;

    case "Add department":
      await addDepartment();
      await mainMenu();
      break;

    case "Exit":
      console.log("Goodbye!");
      process.exit();
      break;
  }
}

// Start the application
mainMenu();
