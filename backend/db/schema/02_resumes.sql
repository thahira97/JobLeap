DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  present_job VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  summary VARCHAR NOT NULL,
  user_img VARCHAR,
  skills VARCHAR(255) NOT NULL,
  position_company VARCHAR(255) NOT NULL,
  years_worked VARCHAR(255) NOT NULL,
  experience VARCHAR ,
  phone_number VARCHAR NOT NULL,
  project_name VARCHAR(255) NOT NULL,
  project_img VARCHAR,
  project_description VARCHAR(255) NOT NULL,
  is_original BOOLEAN
);