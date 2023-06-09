DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  resume_id INTEGER NOT NULL REFERENCES resumes(id),
  project_name VARCHAR(255) NOT NULL,
  project_img VARCHAR,
  project_description VARCHAR(255) NOT NULL
);
