
require('dotenv').config();

const mongoose = require('mongoose');
const URI =`${process.env.DB_CONNECTION_STRING}`;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('db connected successfully');
}

module.exports = connectDB;