const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger-output.json');


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


// require controller
const contacts = require('../controllers/contacts');

//  GET request to return all files from database
router.get('/', contacts.getContacts);

//  GET request to return specific file according to id specified by user
router.get('/contacts/:id', contacts.getContact);

// CREATE request to create a file within a collection
router.post('/contacts', contacts.createContact);

// UPDATE using middleware
router.post('/contacts/:id', contacts.getDbContact, contacts.updateContact);

// DELETE using middleware
router.delete('/contacts/:id', contacts.getDbContact,  contacts.deleteContact);

module.exports = router;