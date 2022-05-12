// Status code reference: https://restfulapi.net/http-status-codes/

// Reference Schema created
const Contact = require('../models/contact')

// GET All Contacts
const getContacts = async (req, res) => {

    // #swagger.tags = ['Contacts']
    // #swagger.description = 'Get all contacts in database'

    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

// GET One Contact
const getContact = async (req, res) => {

    // #swagger.tags = ['Contacts']
    // #swagger.description = 'Get one contact from the database using an ID'

    // Use Find By ID instead of FindOne()

    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);

    } catch(err) {
        res.status(400).json({message: err.message})
    }
}

// CREATE 
const createContact = async (req, res) => {

    // #swagger.tags = ['Contacts']
    // #swagger.description = 'Create a new contact in the database'

    // Create a model for the user to store their info in

    const contact = new Contact({
        birthday: req.body.birthday,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    // save model to the database
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
}

// UPDATE
const updateContact = async (req, res) => {

    // #swagger.tags = ['Contacts']
    // #swagger.description = 'Update exisiting contact in the database using ID to locate that contact.'

    // Easy to read variable.
    const request = req.body;

    // Using "middleware" specified in ./routes/contact.js
    // Tied to async function at bottom of file.
    // Allows me to not have to FindById in all of these calls.

    // Update contact to be whatever user specified.
    if(request.birthday != null) {
        res.contact.birthday = request.birthday
    }
    if(request.email != null) {
        res.contact.email = request.email
    }
    if(request.favoriteColor != null) {
        res.contact.favoriteColor = request.favoriteColor
    }
    if(request.firstName != null) {
        res.contact.firstName = request.firstName
    }
    if(request.lastName != null) {
        res.contact.lastName = request.lastName
    }

    // Try to update the database
    try {
        const updatedContact = await res.contact.save();
        res.status(200).json(updatedContact);
    }
     catch(err) {
        res.status(400).json({message: err.message});
    }

}

// DELETE
const deleteContact = async (req, res) => {

    // #swagger.tags = ['Contacts']
    // #swagger.description = 'Searches database for specific contact based on ID and removes it from database.'

    try {
        // Find contact by ID and remove
        await res.contact.deleteOne()
        
        // Send successful response.
        res.json({message: "Contact Deleted"});

    } catch(err) {
        res.status(500).json({message: err.message});
    }

}

// Middleware
async function getDbContact(req, res, next) {

    let contact;

    try {
        contact = await Contact.findById(req.params.id);

        if(contact == null)
        {
            return res.status(404).json({message: "Could not find specified contact"});
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.contact = contact;
    next();
}


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getDbContact
}