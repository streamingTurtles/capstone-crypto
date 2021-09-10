const { request, response } = require("express");

const inMemory_CryptosCrypto_Name_Rank = [
    {
      name: 'Bitcoin',
      rank: 1
    },
    {
      name: 'Ethereum',
      rank: 2
    },
    {
      name: 'Cardano',
      rank: 3
    },
    {
     name: 'Tether',
     rank:  4
     },
    {
     name: 'Biance',
     rank:  5
     },
    {
     name: 'Solana',
     rank: 6
      },
    {
     name: 'XRP',
     rank: 7
    }  
  ];


// TESTING CRUD functions that will perform operations in the db, but for now
// I am testing the functions with "inMemory_Cryptos" mock data before being 
// applied to "persistant" data in a postgres DB
//
// Create, Read, Update, & Delete db functions

// testing "Read all" all hard-coded cryptos
// CRUD "R, read" function for HTTP RESTFUL - "get" method
const getAll_Crypto = async (request, response) => {
  response.status(200).json(inMemory_CryptosCrypto_Name_Rank);
};


// test "Read one" a single crypto
// CRUD "R, read" function for HTTP RESTFUL - "get" method
const getOne_Crypto = async (request, response) => {
  response.status(200).json(inMemory_CryptosCrypto_Name_Rank[0]) 
};


// testing adding one "Create" to the crypto list
// CRUD "C, create" function for HTTP RESTFUL - "post" method
const addOne_Crypto = async (reques, response) => {
  const { name, rank} = request.body;  // destructuring
  inMemory_Cryptos.push({ name, rank});
  response.status(201).send(`a new Crypto Currency has been added`);
};


// testing "update" the 1st item in the list, index [0]
// CRUD "U update" function for HTTP RESTFUL - "put" method
const update_Crypto = (request, response) => {
  const { name, rank } = request.body; // destructuring
  inMemory_Cryptos[0] = { name, rank };  // replace with other from input or db
  response.status(200).send(`No. 1 ranking in the crypto list has been replaced`);
};


// testing "deleting" a crypto from the list
// CRUD "D, delete" function for HTTP RESTFUL - "Delete" method
const delete_Crypto = (request, response) => {
inMemory_Cryptos[0].shift();
response.status(200).send(`No. 1 crypto has been deleted`);
};


// so we can consume these functions outside of the file
module.exports = {
  getAll_Crypto,
  getOne_Crypto,
  addOne_Crypto,
  update_Crypto,
  delete_Crypto
};  








