DROP TABLE IF EXISTS job_listings CASCADE;
CREATE TABLE job_listings (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  company_image VARCHAR NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_summary VARCHAR,
  job_description VARCHAR NOT NULL,
  salary VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  schedule VARCHAR(255) NOT NULL,
  flex_time VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255) NOT NULL
);
