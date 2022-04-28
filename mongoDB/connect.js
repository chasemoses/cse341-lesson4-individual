
require('dotenv').config();

const mongoose = require('mongoose');
const URI =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dqdjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('db connected successfully');
}

module.exports = connectDB;