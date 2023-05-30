DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  present_job VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  summary VARCHAR NOT NULL,
  user_img VARCHAR,
  phone_number VARCHAR NOT NULL,
  is_original BOOLEAN
);