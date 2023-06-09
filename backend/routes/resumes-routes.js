const express = require('express');
const router  = express.Router();
const { getResumes, getResume, createResume, updateResume } = require('../db/queries/resumes_queries');

router.get("/", getResumes);
router.get("/user/:id", getResume);
router.post('/', createResume);
router.put('/', (req, res) => {
  updateResume("resumes", "location", "user.id", 1, 2)
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({
      error: err.message
    }));
});

module.exports = router;