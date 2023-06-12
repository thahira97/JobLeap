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

const updateResume = () =>
{
  
  db.query(
    `SELECT * FROM users`,
    [],
    (err, data) =>
    {
      const { currentUser } = useContext(AuthContext);
      const userID = currentUser.id;
      const { present_job, location, summary, user_img, skills, phone_number} =
        req.body;
      
      db.query(
              `
                update resumes 
                SET present_job =$1, location=$2, summary=$3, user_img=$4, skills=$5, phone_number=$6
                WHERE user_id = $7
                RETURNING *;
                `,
        [
          req.body.present_job,
          req.body.location,
          req.body.summary,
          req.body.user_img,
          req.body.skills,
          req.body.phone_number,
          userID
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

module.exports = { getResumes, getResume, createResume, updateResume };