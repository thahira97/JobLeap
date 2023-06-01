DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  present_job VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  summary VARCHAR(255) NOT NULL,
  user_img VARCHAR,
  skills VARCHAR(255) NOT NULL,
  phone_number VARCHAR NOT NULL,
  is_original BOOLEAN
);