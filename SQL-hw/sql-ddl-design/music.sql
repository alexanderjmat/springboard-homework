-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music


CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album TEXT NOT NULL,
  producers TEXT[] NOT NULL
);

CREATE TABLE artists (
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL
);

CREATE TABLE featured_artists (
id SERIAL PRIMARY KEY, 
song_id INTEGER REFERENCES songs ON DELETE CASCADE,
artist_id INTEGER REFERENCES artists ON DELETE CASCADE
);

INSERT INTO songs
  (title, duration_in_seconds, release_date, album, producers)
VALUES
  ('MMMBop', 238, '04-15-1997', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
  ('Bohemian Rhapsody', 355, '10-31-1975', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
  ('One Sweet Day', 282, '11-14-1995', 'Daydream', '{"Walter Afanasieff"}'),
  ('Shallow', 216, '09-27-2018', 'A Star Is Born', '{"Benjamin Rice"}'),
  ('How You Remind Me', 223, '08-21-2001', 'Silver Side Up', '{"Rick Parashar"}'),
  ('New York State of Mind', 276, '10-20-2009', 'The Blueprint 3', '{"Al Shux"}'),
  ('Dark Horse', 215, '12-17-2013', 'Prism', '{"Max Martin", "Cirkut"}'),
  ('Moves Like Jagger', 201, '06-21-2011', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
  ('Complicated', 244, '05-14-2002', 'Let Go', '{"The Matrix"}'),
  ('Say My Name', 240, '11-07-1999', 'The Writing''s on the Wall', '{"Darkchild"}');

INSERT INTO artists
  (name)
VALUES
  ('Hanson'), ('Queen'), ('Mariah Carey'), ('Boyz II Men'), ('Laddy Gaga'), ('Bradley Cooper'), ('Nickelback'), ('Jay Z'), ('Alicia Keys'), ('Katy Perry'), ('Juicy J'), ('Maroon 5'), ('Chrstina Aguilera'), ('Avril Lavigne'), ('Destinys Child');
