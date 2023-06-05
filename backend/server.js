const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const jobsRoutes = require("./routes/jobs-routes");

const app = express();


///////////////
//MIDDLEWARE///
///////////////

app.use(cors());
app.use(bodyParser.json())
app.use('/api/jobs',jobsRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
