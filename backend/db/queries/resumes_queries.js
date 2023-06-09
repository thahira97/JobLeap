const db = require('../connection');

const getResumes = (req, res) => {
  db.query("SELECT * FROM resumes;", [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
};

const getResume = (req, res) => {
  db.query(`SELECT resumes.*, education.*, experiences.*,projects.*, users.name, users.email
  FROM resumes 
  JOIN users ON resumes.user_id = users.id
  JOIN experiences ON experiences.resume_id = resumes.id 
  JOIN education ON education.resume_id = resumes.id 
  JOIN projects ON projects.resume_id = resumes.id
  WHERE users.id = $1`, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows[0]);
  });
};

const createResume = () => {
};


const updateResume = (tableName, section, filter, valueOne, valueTwo) =>
{
  db.query(`SELECT resumes.*, education.*, experiences.*,projects.*, users.name, users.email
  FROM resumes 
  JOIN users ON resumes.user_id = users.id
  JOIN experiences ON experiences.resume_id = resumes.id 
  JOIN education ON education.resume_id = resumes.id 
  JOIN projects ON projects.resume_id = resumes.id
  UPDATE ${tableName}
  SET ${section} = $1
  WHERE ${filter} = $2`, [ valueOne, valueTwo], (err, data) =>{
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows[0]);
    });
};

module.exports = { getResumes, getResume, createResume, updateResume };