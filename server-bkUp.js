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
// endpoint path is PLURAL - cryptos
app.get("/getallcryptos", async(req, res) => {
    try {
      const getAll_cryptoNames = await pool.query("SELECT * FROM crypto_name");
      res.json(getAll_cryptoNames);
    } catch (error) {
      console.log.error(err.message)  
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
app.post("/createcrypto", async (req, res) => {
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
app.put("/updatecrypto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updateCrypto = await pool.query(
          "UPDATE crypto_name SET name = $1 WHERE crypto_name_id = $2",
          [name, id]
          );  
          res.json("a crypto name has been updated");
    } catch (err) {
      console.error(err.message);        
    }
})



// delete a crypto
app.delete("/deletecrypto/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCrypto = await pool.query("DELETE FROM crypto_name WHERE crypto_name_id = $1",
        [id]);
        res.json("You deleted a crypto");
    } catch (err) {
        console.log(err.message);        
    }
})






app.listen(port, () => {
    console.log("confirming server is running on port 5000");
})