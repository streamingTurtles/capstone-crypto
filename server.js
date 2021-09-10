const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");  
const api_crypto = require('./routes/api/api_crypto');


// middleware used for cross domain and express that's interacting with the frontend
app.use(cors());  // allow our server be accessible to any domain requesting data from the browser
app.use(express.json()); // access to the request.body object to get JSON data




// TESTing Express Server Routes:

app.get('/cryptos/', api_crypto.getAll_Crypto);
app.get('/cryptos/:id', api_crypto.getOne_Crypto);
app.post('/cryptos/', api_crypto.addOne_Crypto);
app.put('/cryptos/:id', api_crypto.update_Crypto);
app.delete('/cryptos/:id', api_crypto.delete_Crypto);





// ROUTES

// create price

// get prices

// get a current price

// update a price

// delete a price




app.listen(port, () => {
    console.log("confirming server is running on port 5000");
})