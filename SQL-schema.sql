DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER CHECK (age >= 0)
);

INSERT INTO users (name, email, age)
VALUES 
  ('Aisha Bello', 'aisha@example.com', 24),
  ('David Okafor', 'david@example.com', 31);
