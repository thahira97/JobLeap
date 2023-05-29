const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send("Express")
})

app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}`)
})

