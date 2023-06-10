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

const createResume = () => {
};

const updateResume = () => {
};

module.exports = { getResumes, getResume, createResume, updateResume };