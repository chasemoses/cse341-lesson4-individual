
require('dotenv').config();

const mongodb = require('mongoose');
const URI =`${process.env.DB_CONNECTION_STRING}`;

let db;
const connectDB = async() => {
    mongodb.connect(URI);

    const db = mongodb.connection;
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to Database'))
}

const getDb = () => {

    if (db == null) {
        throw Error('Database not set up')
    }
    return db
}

module.exports = {
    connectDB,
    getDb
};