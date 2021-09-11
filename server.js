const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");  // allows us to write queries in postgres
const api_crypto = require('./routes/api/api_crypto');


// middleware used for cross domain and express that's interacting with the frontend
app.use(cors());  // allow our server be accessible to any domain requesting data from the browser
app.use(express.json()); // gives us access to the request.body object to get JSON data



// ROUTES
// TESTing Express Server Routes in React only:
app.get('/cryptos/', api_crypto.getAll_Crypto);
app.get('/cryptos/:id', api_crypto.getOne_Crypto);
app.post('/cryptos/', api_crypto.addOne_Crypto);
app.put('/cryptos/:id', api_crypto.update_Crypto);
app.delete('/cryptos/:id', api_crypto.delete_Crypto);


// Create ROUTES for backend - leveriging express middleware - using pool object "pg" middleware
// to build routes with postgres queries
// get a crypto
//
// get all cryptos
//
// get a current crypto price
//
// post/create a new crypto
app.post("/newcrypto", async (req, res) => {
    try {  // get data from the client side        
        console.log(req.body); // uncomment to test seeing the JSON data in the console when sent via Insomnia w/ JSON data
        const { name } = req.body;
        const newCrypto_name = await pool.query(
        "INSERT INTO crypto_name (name) VALUES($1) RETURNING *", 
        [name]
        );
        res.json(newCrypto_name.rows[0]);
    } catch (err) {
      console.error(err.message);  
    }
})
// put (update) an existing crypto
//
// delete a crypto
//






app.listen(port, () => {
    console.log("confirming server is running on port 5000");
})