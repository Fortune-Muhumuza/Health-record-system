const express = require('express');
const router = express.Router();
const receptionController = require('../controllers/receptionController'); // Updated to use the controllers

// Home route for reception
router.get('/', receptionController.getReceptionHome);

// Add a new patient at reception
router.post('/addPatient', receptionController.addReceptionPatient);

// Get all patients added at reception
router.get('/patients', receptionController.getAllReceptionPatients);

// Get details of a specific patient by ID
router.get('/patients/:id', receptionController.getReceptionPatientById);

// Update patient information at reception
router.put('/patients/:id', receptionController.updateReceptionPatient);

// Delete a patient record at reception
router.delete('/patients/:id', receptionController.deleteReceptionPatient);

module.exports = router;
