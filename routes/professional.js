const express = require('express');
const router = express.Router();

// require controller
const professional = require('../controllers/professional');

// GET request
router.get('/professional', professional.getData);

// export this
module.exports = router;