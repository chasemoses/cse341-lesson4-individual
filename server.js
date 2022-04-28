const express = require('express');
const connectDB = require('./mongoDB/connect');
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config();

const test = process.env.DB_USER;

console.log(test);
//app.use('/', require('./routes'));
connectDB();
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})