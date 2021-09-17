
DROP DATABASE IF EXISTS crypto_db;

CREATE DATABASE crypto_db;



\c crypto_db;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

BEGIN;


-- INSERT INTO crypto_name (name)
-- VALUES
-- ('ABCD'),
-- ('EFG'),
-- ('HIJK'),
-- ('LMNOP'),
-- ('QRS'),
-- ('TUV'),
-- ('WX'),
-- ('YZ');


-- before I can use a seed:
-- I Need to figure out how to seed with encryption 
-- & then as same time to decrypt to show un-encrypted data in the view

        


COMMIT;