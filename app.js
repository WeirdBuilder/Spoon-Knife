// app.js

// Student Name: Cameron Wlodarczyk
// Student ID: 1231816913
// Date: 3/29/2026

const express = require('express');
const app = express();

const logger = require('./loggerMiddleware');
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})