const queries = require("../db/queries");

async function viewAllRoles() {
  const roles = await queries.viewAllRoles();
  console.table(roles[0]);
}

module.exports = viewAllRoles;
