const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require('cors');
const fetch = require('cross-fetch');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const jobsRoutes = require("./routes/jobs-routes");

const app = express();


///////////////
//MIDDLEWARE///
///////////////

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use('/api/jobs',jobsRoutes);


app.post('/completions', async(req, res)=> {
  const options = {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      model : "gpt-3.5-turbo",
      messages: [{ role: 'user', content: 'how are you?'}],
      max_tokens: 100,
    })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    res.send(data)
  }
  catch(error) {
    console.log(error)
  }
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
