DROP TABLE IF EXISTS experiences CASCADE;
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY NOT NULL,
  resume_id INTEGER NOT NULL REFERENCES resume(id),
  position VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT NOT NULL
);