const express = require('express');
const mongodb = require('./mongoDB/connect');
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config();

app
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
.use(express.json())
.use('/', require('./routes/contacts'));


mongodb.connectDB();

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
