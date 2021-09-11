const { req, res } = require("express");


const crypto_name = [
  {
    name: 'Ripple'
  },
  {
    name: 'Cardano'
  }
];


// TESTING CRUD functions that will perform operations in crypto_db, (no longer inMemory) but now persisting in db
//
// Create, Read, Update, & Delete db functions
//
// "Read all" cryptos
const getAll_Crypto = async (req, res) => {
  res.status(200).json(crypto_name);
};


// "Read one" a single crypto
// CRUD "R, read" function for HTTP RESTFUL - "get" method
//
const getOne_Crypto = async (req, res) => {
  res.status(200).json(crypto_name[0]) 
};


// adding one "Create" to the crypto list
// CRUD "C, create" function for HTTP RESTFUL - "post" method
//
const addOne_Crypto = async (req, res) => {
  const { name } = req.body;  // destructuring
  crypto_name.push({ name });
  res.status(201).send(`a new Crypto Currency name has been added`);
  console.log(req.body); // see what has been added
};

// "update" the 1st item in the list, index [0]
// CRUD "U update" function for HTTP RESTFUL - "put" method
//
const update_Crypto = (req, res) => {
  const { name } = req.body; // destructuring
  crypto_name[0] = { name };  // replace with other from input or db
  res.status(200).send(`No. 1 ranking in the crypto list has been replaced`);
};


// "deleting" a crypto from the list
// CRUD "D, delete" function for HTTP RESTFUL - "Delete" method
//
const delete_Crypto = (req, res) => {
crypto_name[0].shift();
res.status(200).send(`No. 1 crypto has been deleted`);
};


// so we can consume these functions outside of the file
module.exports = {
  getAll_Crypto,
  getOne_Crypto,
  addOne_Crypto,
  update_Crypto,
  delete_Crypto
};  








