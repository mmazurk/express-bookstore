/** Database config for database. */


const { Client } = require("pg");
const {DB_URI, DB_NAME} = require("./config");

// Macbook Pro
// let db = new Client({
//   connectionString: DB_URI
// });

// WSL2
let db = new Client({
  host: "/var/run/postgresql/",
  database: DB_NAME,
});


db.connect();


module.exports = db;
