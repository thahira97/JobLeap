DROP TABLE IF EXISTS experiences CASCADE;
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY NOT NULL,
  resume_id INTEGER NOT NULL REFERENCES resumes(id),
  position VARCHAR(255) NOT NULL,
  company VARCHAR NOT NULL,
  start_date VARCHAR(255) NOT NULL,
  end_date VARCHAR(255),
  description TEXT NOT NULL
);