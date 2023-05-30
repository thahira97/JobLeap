DROP TABLE IF EXISTS job_listings CASCADE;
CREATE TABLE job_listings (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_description VARCHAR(255) NOT NULL,
  salary VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  date_posted TIMESTAMP,
);
