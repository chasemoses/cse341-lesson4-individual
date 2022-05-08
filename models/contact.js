// Wanted to learn how to use schemas to make working with the database easier.
// reference: https://www.youtube.com/watch?v=fgTGADljAeg at 12:00 in.
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    birthday: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    favoriteColor: {
        type: String,
        
    },
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    }
})

const contact = mongoose.model('Contact', contactSchema, "contacts" )

module.exports = contact;