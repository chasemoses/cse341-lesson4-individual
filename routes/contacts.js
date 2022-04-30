const express = require('express');
const router = express.Router();

// require controller
const contacts = require('../controllers/contacts');

//  GET request to return all files from database
router.get('/contacts', contacts.getContacts);

//  GET request to return specific file according to id specified by user
router.get('/contacts/:id', contacts.getContact);

// CREATE request to create a file within a collection
router.post('/contacts', contacts.createContact);
// UPDATE 

// DELETE

module.exports = router;