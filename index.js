const inquirer = require("inquirer");
const queries = require("./db/queries");

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
      const employees = await queries.viewAllEmployees();
      console.table(employees[0]);
      await mainMenu();
      break;

    case "Add employee":
      const allRolesForEmployee = await queries.viewAllRoles();
      const roleChoicesForEmployee = allRolesForEmployee[0].map((role) => ({
        name: role.title,
        value: role.id,
      }));

      const allManagers = await queries.viewAllEmployees();
      const managerChoices = allManagers[0].map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
      }));

      // Adding an option for no manager
      managerChoices.push({ name: "None", value: null });

      const employeeDetails = await inquirer.prompt([
        { name: "first_name", message: "Enter employee's first name:" },
        { name: "last_name", message: "Enter employee's last name:" },
        {
          type: "list",
          name: "role_id",
          message: "Select the role for this employee:",
          choices: roleChoicesForEmployee,
        },
        {
          type: "list",
          name: "manager_id",
          message: "Select the manager for this employee:",
          choices: managerChoices,
        },
      ]);

      await queries.addEmployee(employeeDetails);
      console.log("Employee added!");
      await mainMenu();
      break;

    case "Update employee role":
      const allEmployees = await queries.viewAllEmployees();

      const employeeChoices = allEmployees[0].map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
      }));

      const selectedEmployee = await inquirer.prompt([
        {
          type: "list",
          name: "employeeId", // Renaming to "employeeId" for clarity.
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
          name: "roleId", // Renaming to "roleId" for clarity.
          message: "Which role do you want to assign to the employee?",
          choices: roleChoices,
        },
      ]);

      await queries.updateEmployeeRole(
        selectedEmployee.employeeId,
        selectedRole.roleId
      );

      const employeeName = employeeChoices.find(
        (choice) => choice.value === selectedEmployee.employeeId
      ).name;
      const roleName = roleChoices.find(
        (choice) => choice.value === selectedRole.roleId
      ).name;

      console.log(`Updated role for ${employeeName} to ${roleName}!`);

      await mainMenu();
      break;

    case "View all roles":
      const allRoles = await queries.viewAllRoles();
      console.table(allRoles[0]);
      await mainMenu();
      break;

    case "Add role":
      const allDepartments = await queries.viewAllDepartments();

      const departmentChoices = allDepartments[0].map((dept) => ({
        name: dept.name,
        value: dept.id,
      }));

      const roleDetails = await inquirer.prompt([
        { name: "title", message: "Enter role title:" },
        { name: "salary", message: "Enter role salary:", type: "number" },
        {
          type: "list",
          name: "department_id",
          message: "Select the department for this role:",
          choices: departmentChoices,
        },
      ]);

      await queries.addRole(roleDetails);
      console.log("Role added!");
      await mainMenu();
      break;

    case "View all departments":
      const departments = await queries.viewAllDepartments();
      console.table(departments[0]);
      await mainMenu();
      break;

    case "Add department":
      const departmentDetails = await inquirer.prompt([
        { name: "name", message: "Enter department name:" },
      ]);
      await queries.addDepartment(departmentDetails);
      console.log("Department added!");
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
