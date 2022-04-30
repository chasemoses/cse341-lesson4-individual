// Wanted to learn how to use schemas to make working with the database easier.
// reference: https://www.youtube.com/watch?v=fgTGADljAeg at 12:00 in.
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    birthday: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const contact = mongoose.model('Contact', contactSchema, "contacts" )

module.exports = contact;