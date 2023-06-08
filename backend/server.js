const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const db = require('./db/connection');

////////////////////////////////////////////////////////////
// Configuration
////////////////////////////////////////////////////////////

const app = express();
const PORT = process.env.PORT || 8080;

////////////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

////////////////////////////////////////////////////////////
// Routes - Jobs
////////////////////////////////////////////////////////////

const jobsRoutes = require('./routes/jobs-routes');
app.use('/api/jobs', jobsRoutes);

////////////////////////////////////////////////////////////
// Routes - Resume
////////////////////////////////////////////////////////////

const resumeRoutes = require('./routes/resume-routes');
app.use('/api/resume', resumeRoutes);

////////////////////////////////////////////////////////////
// Routes - Register & Login
////////////////////////////////////////////////////////////

const verifyUserToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, "jwt-secret-key");
    req.name = decoded.name;
    next();
  } catch (err) {
    return res.json({ Error: "Invalid token." });
  }
};

app.get('/', verifyUserToken, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// POST /signup

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  db.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [name, email, password])
    .then(result => {
      return res.json({ Status: "Success" });
    })
    .catch(err => {
      return res.json({ Error: "Inserting data error in server" });
    });
});

// POST /login

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query(`
    SELECT * FROM users
    WHERE email = $1 AND password = $2;
    `, [email, password])
    .then(result => {
      if (result.rows[0]) {
        const name = result.rows[0].name;
        const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
        res.cookie('token', token);
        return res.json({ Status: "Success" });
      } else {
        return res.json({ Error: "Incorrect email/password" });
      }
    })
    .catch(err => {
      return res.json({ Error: "Login error in server" });
    });
});

// GET /logout

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: "Success" });
});

////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});