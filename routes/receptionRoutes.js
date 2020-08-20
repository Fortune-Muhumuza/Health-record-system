
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const receptionController = require('../controllers/receptionController');



router.get('/', receptionController.getReceptionHome);

//router.post('/addPatient', receptionController.addReceptionPatient);

module.exports = router;
