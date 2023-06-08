const db = require("../connection");

const getResume = (email) => {
  return db.query(`SELECT resumes.*, education.*, experiences.*, users.name, users.email
  FROM resumes 
  JOIN users ON resumes.user_id = users.id
  JOIN experiences ON experiences.resume_id = resumes.id 
  JOIN education ON education.resume_id = resumes.id 
  WHERE users.email LIKE '%$1%';`, [email]);
};

module.exports = { getResume };