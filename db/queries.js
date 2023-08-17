const db = require("./connections");

class DBQueries {
  // View all departments
  viewAllDepartments() {
    return db.query("SELECT id, name FROM department");
  }

  // View all roles
  viewAllRoles() {
    return db.query(
      `SELECT role.id, title, salary, department.name AS department 
       FROM role 
       JOIN department ON role.department_id = department.id`
    );
  }

  // View all employees
  viewAllEmployees() {
    return db.query(
      `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager 
       FROM employee e 
       LEFT JOIN role ON e.role_id = role.id 
       LEFT JOIN department ON role.department_id = department.id 
       LEFT JOIN employee m ON e.manager_id = m.id`
    );
  }

  // Add a department
  addDepartment(data) {
    return db.query("INSERT INTO department SET ?", data);
  }

  // Add a role
  addRole(data) {
    return db.query("INSERT INTO role SET ?", data);
  }

  // Add an employee
  addEmployee(data) {
    return db.query("INSERT INTO employee SET ?", data);
  }

  // Update employee role
  updateEmployeeRole(employeeId, roleId) {
    return db.query("UPDATE employee SET role_id = ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
  }

  // Update an employee's manager
  updateEmployeeManager(employeeId, managerId) {
    return db.query("UPDATE employee SET manager_id = ? WHERE id = ?", [
      managerId,
      employeeId,
    ]);
  }

  viewEmployeesByManager(managerId) {
    return db.query(
      `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary 
         FROM employee e 
         LEFT JOIN role ON e.role_id = role.id 
         LEFT JOIN department ON role.department_id = department.id 
         WHERE e.manager_id = ?`,
      [managerId]
    );
  }

  viewEmployeesByDepartment(departmentId) {
    return db.query(
      `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager 
         FROM employee e 
         JOIN role ON e.role_id = role.id 
         JOIN department ON role.department_id = department.id 
         LEFT JOIN employee m ON e.manager_id = m.id
         WHERE department.id = ?`,
      [departmentId]
    );
  }

  // Delete a department
  deleteDepartment(departmentId) {
    return db.query("DELETE FROM department WHERE id = ?", [departmentId]);
  }

  // Delete a role
  deleteRole(roleId) {
    return db.query("DELETE FROM role WHERE id = ?", [roleId]);
  }

  // Delete an employee
  deleteEmployee(employeeId) {
    return db.query("DELETE FROM employee WHERE id = ?", [employeeId]);
  }
}

module.exports = new DBQueries();
