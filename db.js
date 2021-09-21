const Pool = require("pg").Pool;   // using Pool, allows us to run queries with postgres

// const pool = new Pool({
//     user: "postgres",
//     psssword: "root",
//     host: "localhost",
//     port: 5432,
//     database: "crypto_db"
// });


const pool = new Pool({
    PGUSER: "crypto_user",
    PGPASSWORD: "password",
    PGHOST: "localhost",
    PGPORT: 5432,
    PORT:5000,
    PGDATABASE: "crypto_db"
});

module.exports = pool;