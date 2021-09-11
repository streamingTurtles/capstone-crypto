DROP DATABASE IF EXISTS crypto_db;

CREATE DATABASE crypto_db;

\c crypto_db;


-- crypto name
CREATE TABLE crypto_name (
  crypto_name_id SERIAL PRIMARY KEY,
  name VARCHAR(10) NOT NULL
);


-- crypto symbol
CREATE TABLE crypto_symbol (
  crypto_symbol_id SERIAL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  icon CHAR(1),
  crypto_name_id INTEGER REFERENCES crypto_name(crypto_name_id) ON DELETE SET NULL

);


-- crypto rank
CREATE TABLE crypto_rank (
  crypto_rank_id SERIAL PRIMARY KEY,
  rank INTEGER NOT NULL,
  crypto_name_id INTEGER REFERENCES crypto_name(crypto_name_id) ON DELETE SET NULL 
);






-- 
-- crypto yearly HI price 
-- CREATE TABLE prices_year_hi(
    -- id SERIAL PRIMARY KEY,
    -- hi, NUMERIC(6, 2) NOT NULL,
    -- id INTEGER REFERENCES crypto_name_id(id) ON DELETE SET NULL
-- );
-- 
-- 
-- crypto yearly LOW price 
-- CREATE TABLE prices_year_low(
    -- id SERIAL PRIMARY KEY,
    -- low, NUMERIC(6, 2) NOT NULL,
    -- id INTEGER REFERENCES crypto_name_id(id) ON DELETE SET NULL
-- );
-- 
-- 
-- crypto yearly CURRENT price 
-- CREATE TABLE prices_year_current(
    -- id SERIAL PRIMARY KEY,
    -- current, NUMERIC(6, 2) NOT NULL,
    -- id INTEGER REFERENCES crypto_name_id(id) ON DELETE SET NULL
-- );
-- 
-- 
-- buy sell recomendation 
-- CREATE TABLE recomendation (
  -- id SERIAL PRIMARY KEY,
  -- title VARCHAR(100) NOT NULL,
  -- review_text TEXT NOT NULL,
  -- rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  -- id INTEGER NOT NULL REFERENCES crypto_name_id(id) ON DELETE CASCADE
-- );










