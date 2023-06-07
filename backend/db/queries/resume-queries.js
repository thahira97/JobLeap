const db = require("../connection");

const getResume = (id) => {
  return db.query(`SELECT resumes.*, education.*, experiences.*
  FROM resumes 
  JOIN experiences ON experiences.resume_id = resumes.id 
  JOIN education ON education.resume_id = resumes.id 
  WHERE resumes.user_id=$1`, [id]);
};

module.exports = { getResume };