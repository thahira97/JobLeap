const db = require('../connection');
const jwt = require('jsonwebtoken');

const getResumes = (req, res) =>{
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


const updateResume = (req, res) =>{

  db.query(
    `SELECT * FROM users`,
    [],
    (err, data) =>
    {
      const token = jwt.sign({ id: data.rows[0].id }, "jwtkey");
      const user_id = jwt.verify(token, "jwtkey").id;
      const { present_job, location, summary, user_img, skills, phone_number } =
        req.body;
      
      db.query(
              `
                update resumes 
                SET present_job =$1, location=$2, summary=$3, user_img=$4, skills=$5, phone_number=$6
                WHERE user_id = $7
                RETURNING *;
                `,
        [
          present_job,
          req.body.location,
          summary,
          user_img,
          skills,
          phone_number,
          user_id,
        ],
        (err, data) =>
        {
          if (err) return res.json(err);
          return res.status(200).json(data);
        }
      );
    }
  );

};

module.exports = { getResumes, getResume, createResume, updateResume};