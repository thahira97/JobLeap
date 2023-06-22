# JobLeap

JobLeap is a cutting-edge application that revolutionizes the job search experience. With JobLeap, users can effortlessly create personalized profiles and instantly access a curated list of job opportunities that align with their specific criteria. Seamlessly applying for jobs is made even easier as our integrated ChatGPT API dynamically modifies resumes based on individual requirements. Whether opting for the original or modified version, JobLeap empowers users to confidently pursue their career aspirations.

## Homepage

This the homepage of our app, where job seekers can effortlessly input their desired job title and location. Upon initiating the search, our application seamlessly connects with our robust backend API. we retrieve and present a comprehensive list of job opportunities that precisely match the user's specified criteria.

![Homepage](./docs/Homepage.gif)

## Signup and Profile

This is our signup page, where users can effortlessly create an account by providing their email and password. After successful registration, users will be seamlessly directed to our Create Profile page. Here, they have the opportunity to craft a captivating profile by showcasing their projects through captivating images. Once created, users can easily manage and update their profile, ensuring their presence on our app remains relevant and impactful.

![Signup-page](./docs/Signup-page.png)

## Create Profile and Profile page of user

![Profile-page](./docs/Profile.gif)

Our platform provides users with the ability to create and edit their profiles, ensuring a personalized experience. Any changes made to the profile are securely saved in our database, guaranteeing the integrity of the user's information. The dynamic nature of our platform ensures that any modifications to the profile are accurately reflected in real-time. With this seamless edit functionality, users can effortlessly maintain an up-to-date and professional profile, aligning it with their evolving skills and qualifications. 

![Edit](./docs/Edit-profile.png)


## More-refined search

We provide an enhanced job search experience, offering users refined search options to tailor their preferences. Our platform allows users to narrow down job listings based on factors such as location, date posted, schedule (full-time, part-time, internship), and onsite/remote options (on-site, remote, hybrid). Additionally, users can filter by salary range. Once users find a job that aligns with their criteria, they can easily access a detailed description for a comprehensive understanding of the opportunity. 

![Refined-Search](./docs/Filtered-search.gif)

## ChatGPT API Integration for Resume Modification

To integrate the ChatGPT API for resume modification, the job description and user's resume are sent via a POST request to the API. The API generates a modified version of the resume based on the job description, which is then presented to the user in a professional format. The user is given the option to compare and choose between the original and modified resumes. Once the user has made their selection, the chosen resume is submitted for the job application. 

![ChatGPT](./docs/ChatGPT.gif)

---

### Project-Stack

- React
- React-router
- Express.js
- Node.js
- PostgreSQL
- OpenAI API

---

## Project Setup

1. Clone the repository using this command in terminal: 

```
git@github.com:thahira97/JobLeap.git
```

2. Install dependencies for back-end, seed the database and run the back-end server:

```
cd backend
npm install
npm run db:reset
npm start
```
3. Install dependencies for front-end and start the web server:

```
cd frontend
npm install
npm start
```
---
## Dependencies

### Front-end

```
  @testing-library/jest-dom: ^5.16.5,
    @testing-library/react": ^13.4.0,
    @testing-library/user-event": ^13.5.0,
    axios: ^1.4.0,
    bootstrap: ^5.2.3,
    react: ^18.2.0,
    react-bootstrap: ^2.7.4,
    react-dom": ^18.2.0,
    react-router-dom: 5.3.4,
    react-scripts: 5.0.1,
    react-transition-group: ^4.4.5,
    web-vitals: ^2.1.4
```

### Back-end

```
    bcrypt: ^5.1.0,
    chalk: ^2.4.2,
    cookie-parser: ^1.4.6,
    cors: ^2.8.5,
    cross-fetch: ^3.1.6,
    dotenv: ^16.0.3,
    express: ^4.18.2,
    fs: ^0.0.1-security,
    jsonwebtoken: ^9.0.0,
    morgan: ^1.10.0,
    node-fetch: ^3.3.1,
    pg: ^8.11.0,
    pg-pool: ^3.6.0
```
Checkout out JobLeap at: http://localhost:3000/ 

