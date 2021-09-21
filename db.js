const Pool = require("pg").Pool;   // using Pool, allows us to run queries with postgres

// This config works with local Mac
// const pool = new Pool({
//     user: "postgres",
//     psssword: "root",
//     host: "localhost",
//     port: 5432,
//     database: "crypto_db"
// });


// Doesn't work
// const pool = new Pool({
//     PGUSER: "crypto_user",
//     PGPASSWORD: "password",
//     PGHOST: "localhost",
//     PGPORT: 5432,
//     PORT:5000,
//     PGDATABASE: "crypto_db"
// });


const pool = new Pool({
    user: "crypto_user",
    psssword: "password",
    host: "localhost",
    port: 5432,
    database: "crypto_db"
});


module.exports = pool;




// PREVIOUS .env
// ENCRYPTION_KEY=1234 

// PGHOST=localhost
// PGUSER=crypto_user
// PGDATABASE=crypto_db
// PGPASSWORD=root
// PGPORT=5432
// REDPORT=6379
// PORT=5000

// my-app/.eslintcache