const express = require('express');
const mongodb = require('./mongoDB/connect');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors')

require('dotenv').config();

app
.use(cors())
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
