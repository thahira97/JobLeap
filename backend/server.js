const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('cross-fetch');


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
  methods: ['GET', 'POST', 'PUT'],
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
app.post('/completions', async (req, res) => {
  // const { jobDescription, myExperience, aboutMe } = req.body;
  const { query} = req.body; 
//  console.log("asdasdas", message)
  const options = {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: 'user', content: query}],
      max_tokens: 3000,
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});