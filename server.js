const express = require("express")
const app = express();
const cors = require("cors");

// middleware used for cross domain and express that's interacting with the frontend
app.use(cors());  // allow our server be accessible to any domain requesting data from the browser
app.use(express.json()); // access to the request.body object to get JSON data


app.listen(5000, () => {
    console.log("confirming server is running on port 5000");
})