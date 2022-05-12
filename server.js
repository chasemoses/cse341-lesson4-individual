const express = require('express');
const mongodb = require('./mongoDB/connect');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors')

require('dotenv').config();

var corsOptions = {
  origin: 'https://localhost:8080/contacts',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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
