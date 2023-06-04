const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET REQUEST IN JOBS');
  res.json({message: 'IT WORKS'})
})

module.exports = router;