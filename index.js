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
        case "View all employees":
          queries.viewAllEmployees().then((employees) => {
            console.table(employees);
            mainMenu();
          });
          break;

        case "Add employee":
          inquirer
            .prompt([
              { name: "first_name", message: "Enter employee's first name:" },
              { name: "last_name", message: "Enter employee's last name:" },
              //... other employee details
            ])
            .then((employeeDetails) => {
              queries.addEmployee(employeeDetails).then(() => {
                console.log("Employee added!");
                mainMenu();
              });
            });
          break;

        case "Update employee role":
          // Here, you'd get the list of employees, let the user pick one, then provide the roles to choose from, and then update.
          // Simplified for brevity.
          break;

        case "View all roles":
          queries.viewAllRoles().then((roles) => {
            console.table(roles);
            mainMenu();
          });
          break;

        case "Add role":
          inquirer
            .prompt([
              { name: "title", message: "Enter role title:" },
              { name: "salary", message: "Enter role salary:" },
              //... other role details
            ])
            .then((roleDetails) => {
              queries.addRole(roleDetails).then(() => {
                console.log("Role added!");
                mainMenu();
              });
            });
          break;

        case "View all departments":
          queries.viewAllDepartments().then((departments) => {
            console.table(departments);
            mainMenu();
          });
          break;

        case "Add department":
          inquirer
            .prompt([{ name: "name", message: "Enter department name:" }])
            .then((departmentDetails) => {
              queries.addDepartment(departmentDetails).then(() => {
                console.log("Department added!");
                mainMenu();
              });
            });
          break;

        case "Exit":
          console.log("Goodbye!");
          process.exit();
          break;
      }
    });
}

// Start the application
mainMenu();
