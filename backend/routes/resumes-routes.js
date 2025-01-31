const express = require('express');
const router  = express.Router();
const { getResumes, getResume, createResume, updateResume } = require('../db/queries/resumes_queries');

router.get("/", getResumes);
router.get("/user/:id", getResume);
router.post('/', createResume);
router.put('/:id', updateResume);

module.exports = router;