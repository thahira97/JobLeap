INSERT INTO job_applications (job_listing_id, user_id, applied_date,resume_id)
VALUES (1, 2, CURRENT_TIMESTAMP - INTERVAL, 3);

INSERT INTO job_applications (job_listing_id, user_id, applied_date,resume_id)
VALUES (2, 1, CURRENT_TIMESTAMP - INTERVAL, 3);

INSERT INTO job_applications (job_listing_id, user_id, applied_date,resume_id)
VALUES (2, 3, CURRENT_TIMESTAMP - INTERVAL,1);

INSERT INTO job_applications (job_listing_id, user_id, applied_date,resume_id)
VALUES (3, 2, CURRENT_TIMESTAMP - INTERVAL, 1);
