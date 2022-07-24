DROP DATABASE med_center_db;
CREATE DATABASE med_center_db;
\c med_center_db;

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE patient_list (
    id SERIAL PRIMARY KEY,
    -- doctor_name TEXT REFERENCES doctors,
    -- patient_name TEXT REFERENCES patients,
    doctor_id INTEGER REFERENCES doctors,
    patient_id INTEGER REFERENCES patients
);

CREATE TABLE disease_list (
    id SERIAL PRIMARY KEY, 
    -- patient_name TEXT REFERENCES patients,
    patient_id INTEGER REFERENCES patients,
    disease_name TEXT

);

INSERT INTO doctors (name)
VALUES ('Jeff King'), ('Antonio Smith'), ('Jake Mann'), ('Alison Westfall'), ('Melanie Boswell');

INSERT INTO patients (name)
VALUES ('Timothy Michaels'), ('Alexandra Josephine'), ('Joseph Blowers'), ('Mike Brown'), ('Richard Johnson');

INSERT INTO disease_list (patient_id, disease_name)
VALUES (1, 'Stage 4 Leukemia'), (1, 'Chronic Heart Failure Syndrome'), (3, 'Common Cold');
