const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");  // allows us to write queries in postgres
const api_crypto = require('./routes/api/api_crypto');
const axios = require("axios");


require('dotenv').config();
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

// middleware used for cross domain and express that's interacting with the frontend
app.use(cors());  // allow our server be accessible to any domain requesting data from the browser
app.use(express.json()); // gives us access to the request.body object to get JSON data

// ROUTES
// TESTing Express Server Routes in React only:
// app.get('/cryptos/', api_crypto.getAll_Crypto);
// app.get('/cryptos/:id', api_crypto.getOne_Crypto);
// app.post('/cryptos/', api_crypto.addOne_Crypto);
// app.put('/cryptos/:id', api_crypto.update_Crypto);
// app.delete('/cryptos/:id', api_crypto.delete_Crypto);



// REDIS
const { promisify } = require('util');
const Redis = require('redis');
// { url: } to pass in production instance of redis when ready, for now using localhost & port 6379
// on localmachine - run In Insomnia, using GET with url: http://localhost:5000/coins
// the 1st time it takes ~180ms, then after much faster, i.e ~49.2m 
const RedisClient = Redis.createClient({port: process.env.REDPORT})  
const DEFAULT_EXPIRATION = 120 // 1 sec expiration timelimit held in cache

// REDIS - endpoint using REDIS caching implementatin for the top 10 cryptos
app.get("/coins", async (req, res) => {
  const id = req.query.id
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    { params: { id } }
    )
    RedisClient.setex('coinsInCache', DEFAULT_EXPIRATION, JSON.stringify(data))
  res.json(data)
});



// Redis endpoint for and individual crypto - FUTURE DEV.
// app.get("/coins/:symbol", async (req, res) => {
//   const { data } = await axios.get(
//  `https://api.coingecko.com/api/v3/coins---see-documentation-for-protocol-string.com/${req.params.symbol}`
//   )
//   res.json(data)
// });






//
// Create ROUTES for backend - leveriging express middleware - using pool object "pg" middleware
// to build routes with postgres queries
// get a crypto
//
// get all cryptos
// endpoint path is PLURAL - cryptos
app.get("/getallcryptos", async(req, res) => {
    try {
        //const getAll_cryptoNames = await pool.query("SELECT * FROM crypto_name");
         const getAll_cryptoNames = await pool.query("SELECT crypto_name_id, PGP_SYM_DECRYPT(name::bytea, '1234') as name FROM crypto_name");
        console.log('test', getAll_cryptoNames)
      // "SELECT name, PGP_SYM_DECRYPT(name::bytea, 1234) as name FROM crypto_name WHERE crypto_name_id=39;"
      res.json(getAll_cryptoNames);
    } catch (error) {
      console.log(error.message)  
    }
});


// get only one crypto name
app.get("/getonecrypto/:id", async(req, res) => {
    try {
      // console.log(req.params);
      const { id } = req.params;
      const oneCrypto = await pool.query("SELECT * FROM crypto_name WHERE crypto_name_id = $1", [id]); 
      res.json(oneCrypto.rows[0]);      
    } catch (error) {
        console.log.error(err.message);
        
    }
})



// post/create a new crypto
// endpoint path is SINGULAR - crypto
// added encryption to the input data with pgp_sym_encrypt function
app.post("/createcrypto", async (req, res) => {
    try {  // get data from the client side        
        console.log(req.body); // uncomment to test seeing the JSON data in the console when sent via Insomnia w/ JSON data
        const { name } = req.body;
        const newCrypto_name = await pool.query(
        "INSERT INTO crypto_name (name) VALUES(PGP_SYM_ENCRYPT($1, $2) ) RETURNING *", 
        [name, ENCRYPTION_KEY]
        );
        // uncomment for no encryption
        // "INSERT INTO crypto_name (name) VALUES($1) RETURNING *", 
        // [name]
        // );
        res.json(newCrypto_name.rows[0]);
    } catch (err) {
      console.error(err.message);  
    }
})



// put (update) an existing crypto
app.put("/updatecrypto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updateCrypto = await pool.query(
          "UPDATE crypto_name SET name = $1 WHERE crypto_name_id = $2",
          [name, id]
          );  
          res.json("a crypto name has been updated");
          //res.json(updateCrypto);
    } catch (err) {
      console.error(err.message);        
    }
})



// delete a crypto
app.delete("/deletecrypto/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id pleassseeeeeee', id);
        const deleteCrypto = await pool.query("DELETE FROM crypto_name WHERE crypto_name_id = $1",
        [id]);
        console.log('where is the id???', id);

        return res.status(200)
        //
        //    const deleteCrypto = await pool.query("DELETE FROM crypto_name rows[$1]",[id]);
        // res.json("You deleted a crypto", deleteCrypto);
        //res.json(deleteCrypto);
    } catch (err) {
        console.log(err.message); 
               
    }
})


app.listen(port, () => {
    console.log("confirming server is running on port 5000");
})



// module.exports = {
//   get: promisify(RedisClient.get).bind(RedisClient),
//   set: promisify(RedisClient.set).bind(RedisClient)
// };