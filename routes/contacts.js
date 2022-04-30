const express = require('express');
const router = express.Router();
const mongodb = require('../mongoDB/connect')

// require controller
const contacts = require('../controllers/contacts');

//  GET request to return all files from database
router.get('/', contacts.getContacts);

//  GET request to return specific file according to id specified by user
router.get('/:id', contacts.getContact);

// CREATE request to create a file within a collection

// UPDATE 

// DELETE

module.exports = router;