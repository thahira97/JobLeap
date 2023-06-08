const express = require('express');
const router  = express.Router();
const { getResume } = require('../db/queries/resume-queries');

router.get('/', (req, res) => {
  getResume()
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({
      error: err.message
    }));
});

module.exports = router;