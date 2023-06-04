const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");

const jobsRoutes = require("./routes/jobs-routes");

const app = express();

///////////////
//MIDDLEWARE///
///////////////
app.use('/api/jobs',jobsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
