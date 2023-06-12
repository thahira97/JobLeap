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

const createResume = (req, res) => {
  try {
    const resumeData = req.body;

    db.query(
      `INSERT INTO resumes (user_id, user_img, summary, location, skills, present_job, phone_number) 
      VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        resumeData.user_img,
        resumeData.summary,
        resumeData.location,
        resumeData.skills,
        resumeData.present_job,
        resumeData.phone_number,
        resumeData.user_id
      ]
    );

    db.query(
      `INSERT INTO experiences (resume_id, company, start_date, end_date) 
      VALUES ((SELECT id FROM resumes ORDER BY id DESC LIMIT 1), $1, $2, $3)`,
      [
        resumeData.company,
        resumeData.start_date,
        resumeData.end_date
      ]
    );

    db.query(
      `INSERT INTO projects (resume_id, project_name, project_description, project_img) 
      VALUES ((SELECT id FROM resumes ORDER BY id DESC LIMIT 1), $1, $2, $3)`,
      [
        resumeData.project_name,
        resumeData.project_description,
        resumeData.project_img
      ]
    );

    db.query(
      `INSERT INTO education (resume_id, degree, university_name) 
      VALUES ((SELECT id FROM resumes ORDER BY id DESC LIMIT 1), $1, $2)`,
      [
        resumeData.degree,
        resumeData.university_name
      ]
    );

    return res.status(201).json({ message: "Resume created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateResume = () => {
};

module.exports = { getResumes, getResume, createResume, updateResume };