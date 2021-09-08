const Pool = require("pg").Pool;   // using Pool, allows us to run queries with postgres

const pool = new Pool({
    user: "postgres",
    psssword: "root",
    port: 5432,
    database: "prices"
});

module.exports = pool;