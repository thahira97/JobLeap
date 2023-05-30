### User Stories
* As a job applicant, I can search for jobs with keywords from the homepage without logging in.
* As a job applicant, I can view the job listings (search results) and descriptions without logging in.
* As a job applicant, I can sign up and create an account. (/signup)
* As a job applicant, I can log in or log out of my account. (/login, /logout)
* As a logged-in job applicant, I can create and edit my resume/profile. (user/edit)
- add, edit, remove education
- add, edit, remove experience
- add, edit, remove projects
- add, edit, remove skills
* As a logged-in job applicant, I can generate a modified resume based on the job description. (/jobs/:id/application)
* As a logged-in job applicant, I can apply for a job with current/modified resume. (/jobs/:id/application)
* As a logged-in job applicant, I can view a confirmation message of my application submission. (/jobs/:id/application/success)

## Endpoints

* Browse::
GET/                => homepage
GET/api/jobs        => /jobs?q=webdev   =>  Page that shows the joblistings 
GET/api/resume      => /user/:id/resume =>  Page that shows the modified resume from CHATgptAPI

* Read:: 
GET/api/jobs/:id        => Logged-in user job listings 

* Edit::
POST/login              =>To login
POST/signup             =>To signup/ update the resume
POST/user/:id/profile   =>To make changes in the profile
POST /api/jobs/:id      =>To apply or modify the resume based on the joblisting's job-description

* Add:: 
post /api/jobs/:id/apply => To apply for job

## ERD 
![ERD](/planning/ERD.png)