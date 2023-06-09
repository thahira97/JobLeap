const express = require('express');
const router  = express.Router();
const { getJobs } = require('../db/queries/jobs_queries');

router.get('/', (req, res) => {
  getJobs()
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({
      error: err.message
    }));
});

module.exports = router;