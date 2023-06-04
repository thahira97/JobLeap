DROP TABLE IF EXISTS job_applications CASCADE;
CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY NOT NULL,
  job_listing_id INTEGER REFERENCES job_listings(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  applied_date TIMESTAMP,
  resume_id INTEGER REFERENCES resumes(id) ON DELETE CASCADE
);
