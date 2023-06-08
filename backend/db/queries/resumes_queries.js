const db = require('../connection');

const getResumes = (req, res) => {
  db.query("SELECT * FROM resumes;", [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
};

const getResume = (req, res) => {
  db.query("SELECT resumes.*, name, email FROM users JOIN resumes ON users.id = resumes.user_id WHERE users.id = $1", [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows[0]);
  });
};

const createResume = () => {
};

const updateResume = () => {
};

module.exports = { getResumes, getResume, createResume, updateResume };