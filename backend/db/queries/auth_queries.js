const db = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = (req, res) => {
  const { name, email, password } = req.body;

  db.query(`
    SELECT * FROM users
    WHERE email = $1;
    `, [email], (err, data) => {
    if (err) return res.json(err);
    if (data.rows[0]) return res.status(409).json("User already exists");
  
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    db.query(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
      `, [name, email, password], (err, data) => {
      if (err) return res.json(err);

      const token = jwt.sign({id: data.rows[0].id}, "jwtkey");
      const { password, ...other } = data.rows[0];
      
      res.cookie("access_token", token, {
        httpOnly: true
      }).status(200).json(other);
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  db.query(`
    SELECT * FROM users
    WHERE email = $1;
    `, [email], (err, data) => {
    if (err) return res.json(err);
    if (!data.rows[0]) return res.status(404).json("User not found");
    
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data.rows[0].password);
    if (!isPasswordCorrect) return res.status(400).json("Wrong email/password");

    const token = jwt.sign({id: data.rows[0].id}, "jwtkey");
    const { password, ...other } = data.rows[0];
    
    res.cookie("access_token", token, {
      httpOnly: true
    }).status(200).json(other);
  });
};

const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out");
};

const users = (req, res) => {
  db.query(`
    SELECT * FROM users;
    `, [], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data.rows);
  });
};

module.exports = { signup, login, logout, users };