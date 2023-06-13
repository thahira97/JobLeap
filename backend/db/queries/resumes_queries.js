const db = require('../connection');

const getResumes = (req, res) => {
  db.query("SELECT * FROM resumes;", [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
};

const getResume = (req, res) => {
  db.query("SELECT resumes.*, name, email FROM users JOIN resumes ON users.id = resumes.user_id WHERE users.id = $1 ORDER BY resumes.id DESC", [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows[0]);
  });
};

const createResume = (req, res) => {
  const {
    user_id,
    present_job,
    phone_number,
    location,
    user_img,
    summary,
    education,
    skills,
    position_company,
    years_worked,
    experience,
    project_name,
    project_description,
    project_img,
    is_original
  } = req.body;

  db.query(
    `INSERT INTO resumes (user_id, present_job, phone_number, location, user_img, summary, education, skills, position_company, years_worked, experience, project_name, project_description, project_img, is_original)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *;
    `, [user_id, present_job, phone_number, location, user_img, summary, education, skills, position_company, years_worked, experience, project_name, project_description, project_img, is_original], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
};

const updateResume = () => {
};

module.exports = { getResumes, getResume, createResume, updateResume };