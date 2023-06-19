const express = require('express');
const router  = express.Router();
const { signup, login, logout, users } = require('../db/queries/auth_queries');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/users', users);

module.exports = router;