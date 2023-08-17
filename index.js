const inquirer = require("inquirer");
const queries = require("./db/queries");

function mainMenu() {
  inquirer
    .prompt([
      {
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
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          // Call queries.viewAllDepartments() and then display the results
          // Return to the main menu or handle other actions...
          break;

        // Handle other cases...

        case "Exit":
          process.exit();
          break;
      }
    });
}

// Start the application
mainMenu();
