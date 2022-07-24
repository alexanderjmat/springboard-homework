DROP DATABASE craigslist_db;
CREATE DATABASE craigslist_db;
\c craigslist_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (15) NOT NULL,
    prefered_location TEXT
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR (100) NOT NULL,
    description TEXT,
    category VARCHAR (20),
    location TEXT NOT NULL,
    user_id INTEGER REFERENCES users NOT NULL
);