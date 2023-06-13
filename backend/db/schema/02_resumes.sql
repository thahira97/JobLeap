DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  present_job VARCHAR(255),
  phone_number VARCHAR(255),
  location VARCHAR(255),
  user_img VARCHAR,
  summary VARCHAR,
  education VARCHAR(255),
  skills VARCHAR(255),
  position_company VARCHAR(255),
  years_worked VARCHAR(255),
  experience VARCHAR,
  project_name VARCHAR(255),
  project_description VARCHAR,
  project_img VARCHAR,
  is_original BOOLEAN
);