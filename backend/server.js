const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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
// Routes
////////////////////////////////////////////////////////////

const jobsRoutes = require('./routes/jobs-routes');
app.use('/api/jobs', jobsRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/api/auth', authRoutes);

const resumesRoutes = require('./routes/resumes-routes');
app.use('/api/resumes', resumesRoutes);

////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});