const db = require('../connection');

const getResumes = (req, res) => {
  db.query("SELECT * FROM resumes;", [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
};

const getResume = (req, res) => {
  db.query(`SELECT resumes.*, users.name, users.email, array_agg(DISTINCT education.univ_degree) AS education 
  FROM resumes
  JOIN users ON resumes.user_id = users.id
  JOIN education ON education.resume_id = resumes.id
  WHERE users.id = $1
  GROUP BY resumes.id, users.id;
  
  `, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log("iiiiiiiii",data.rows)
    return res.status(200).json(data.rows[0]);
  });
};

const createResume = (req, res) => {
  const {
    user_id,
    present_job,
    location,
    summary,
    user_img,
    skills,
    position_company,
    years_worked,
    experience,
    phone_number,
    project_name,
    project_img,
    project_description,
    is_original
  } = req.body.resume;
  
  const query = `INSERT INTO resumes (user_id, present_job, location, summary, user_img, skills, position_company, years_worked, experience, phone_number, project_name, project_img, project_description, is_original)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;`;

  const values = [
    user_id,
    present_job,
    location,
    summary,
    user_img,
    skills,
    position_company,
    years_worked,
    experience,
    phone_number,
    project_name,
    project_img,
    project_description,
    is_original
  ];

  db.query(query, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(data.rows[0]);
  });
};

const updateResume = () => {
};

module.exports = { getResumes, getResume, createResume, updateResume };