const Patient = require('../models/PatientModel');

// Render the laboratory home page
exports.getLaboratoryHome = (req, res) => {
    res.render('laboratoryHome');
};

// Add new patient lab results
exports.postAddPatientLabResults = (req, res) => {
    const { patientBloodgroup, patientBloodCellCount, patientUrinalysis, patientSputumResults } = req.body;

    if (!patientBloodgroup || !patientBloodCellCount || !patientUrinalysis || !patientSputumResults) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const date = new Date();

    const newLaboratoryPatient = new Patient({
        patientBloodgroup,
        patientBloodCellCount,
        patientUrinalysis,
        patientSputumResults,
        date,
    });

    newLaboratoryPatient
        .save()
        .then(() => res.json({ message: 'Patient added successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error adding patient: ' + err.message }));
};

// Fetch all patient lab results
exports.getAllPatients = (req, res) => {
    Patient.find()
        .then((patients) => res.json(patients))
        .catch((err) => res.status(500).json({ error: 'Error fetching patients: ' + err.message }));
};

// Fetch a specific patient's lab results by ID
exports.getPatientById = (req, res) => {
    const { id } = req.params;

    Patient.findById(id)
        .then((patient) => {
            if (!patient) {
                return res.status(404).json({ error: 'Patient not found!' });
            }
            res.json(patient);
        })
        .catch((err) => res.status(500).json({ error: 'Error fetching patient: ' + err.message }));
};

// Update a specific patient's lab results
exports.updatePatientLabResults = (req, res) => {
    const { id } = req.params;
    const { patientBloodgroup, patientBloodCellCount, patientUrinalysis, patientSputumResults } = req.body;

    if (!patientBloodgroup || !patientBloodCellCount || !patientUrinalysis || !patientSputumResults) {
        return res.status(400).json({ error: 'All fields are required for updating!' });
    }

    Patient.findByIdAndUpdate(
        id,
        { patientBloodgroup, patientBloodCellCount, patientUrinalysis, patientSputumResults, updatedAt: new Date() },
        { new: true }
    )
        .then((updatedPatient) => {
            if (!updatedPatient) {
                return res.status(404).json({ error: 'Patient not found!' });
            }
            res.json({ message: 'Patient updated successfully!', updatedPatient });
        })
        .catch((err) => res.status(500).json({ error: 'Error updating patient: ' + err.message }));
};

// Delete a specific patient's lab results
exports.deletePatient = (req, res) => {
    const { id } = req.params;

    Patient.findByIdAndDelete(id)
        .then((deletedPatient) => {
            if (!deletedPatient) {
                return res.status(404).json({ error: 'Patient not found!' });
            }
            res.json({ message: 'Patient deleted successfully!' });
        })
        .catch((err) => res.status(500).json({ error: 'Error deleting patient: ' + err.message }));
};
