DROP DATABASE soccer_league;
CREATE DATABASE soccer_league;
\c soccer_league;

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    rank INTEGER UNIQUE
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team_id INTEGER REFERENCES teams NOT NULL, 
    goals_scored INTEGER NOT NULL DEFAULT 0 

);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    date TEXT,
    team_id_1 INTEGER REFERENCES teams, 
    team_id_2 INTEGER REFERENCES teams
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    match_id INTEGER REFERENCES matches NOT NULL
);

CREATE TABLE season (
    id SERIAL PRIMARY KEY,
    season_number INTEGER NOT NULL,
    start_date TEXT NOT NULL, 
    end_date TEXT NOT NULL
);
