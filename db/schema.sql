DROP DATABASE IF EXISTS crypto_db;

CREATE DATABASE crypto_db;

\c crypto_db;


-- crypto ticker symbol & icon 
CREATE TABLE cryptos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  icon CHAR(1)  
);


-- crypto yearly HI price 
CREATE TABLE prices_year_hi(
    id SERIAL PRIMARY KEY,
    hi, NUMERIC(6, 2) NOT NULL,
    crypto_id INTEGER REFERENCES cryptos(id) ON DELETE SET NULL
);


-- crypto yearly LOW price 
CREATE TABLE prices_year_low(
    id SERIAL PRIMARY KEY,
    low, NUMERIC(6, 2) NOT NULL,
    crypto_id INTEGER REFERENCES cryptos(id) ON DELETE SET NULL
);


-- crypto yearly CURRENT price 
CREATE TABLE prices_year_current(
    id SERIAL PRIMARY KEY,
    current, NUMERIC(6, 2) NOT NULL,
    crypto_id INTEGER REFERENCES cryptos(id) ON DELETE SET NULL
);


-- buy sell recomendation 
CREATE TABLE recomendation (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  review_text TEXT NOT NULL,
  rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  crypto_id INTEGER NOT NULL REFERENCES cryptos(id) ON DELETE CASCADE
);










