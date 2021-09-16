-- const { hash } = require('../db/models/schema.sql');

DROP DATABASE IF EXISTS crypto_db;

CREATE DATABASE crypto_db;

\c crypto_db;
CREATE EXTENSION IF NOT EXISTS pgcrypto;



-- crypto name
CREATE TABLE crypto_name (
  crypto_name_id SERIAL PRIMARY KEY,
  name text NOT NULL
);



-- crypto name
-- CREATE TABLE crypto_name (
--   crypto_name_id SERIAL PRIMARY KEY,
--   name VARCHAR(1000) NOT NULL
-- );




-- crypto symbol - future implementation
CREATE TABLE crypto_symbol (
  crypto_symbol_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  icon CHAR(1),
  crypto_name_id INTEGER REFERENCES crypto_name(crypto_name_id) ON DELETE SET NULL

);


-- crypto rank - future implementation 
CREATE TABLE crypto_rank (
  crypto_rank_id SERIAL PRIMARY KEY,
  rank INTEGER NOT NULL,
  crypto_name_id INTEGER REFERENCES crypto_name(crypto_name_id) ON DELETE SET NULL 
);

















