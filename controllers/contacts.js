// Reference Schema created
const Contact = require('../models/contact')

// GET All Contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

// GET One Contact
const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);

    } catch(err) {
        res.status(400).json({message: err.message})
    }
}

// CREATE (For fun)
const createContact = async (req, res) => {

    const contact = new Contact({
        birthday: req.body.birthday,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
}




module.exports = {
    getContacts,
    getContact,
    createContact
}