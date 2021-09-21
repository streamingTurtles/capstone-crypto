const Pool = require("pg").Pool;   // using Pool, allows us to run queries with postgres

// const pool = new Pool({
//     user: "postgres",
//     psssword: "root",
//     host: "localhost",
//     port: 5432,
//     database: "crypto_db"
// });

const pool = new Pool({
    PGUSER: "postgres",
    PGPASSWORD: "root",
    PGHOST: "localhost",
    PGPORT: 5432,
    PGDATABASE: "crypto_db"
});

module.exports = pool;