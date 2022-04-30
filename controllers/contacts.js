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








module.exports = {
    getContacts,
    getContact
}