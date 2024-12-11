// In `medicalRecordsController.js`
const MedicalRecord = require('../models/MedicalRecordModel');

exports.addMedicalRecord = (req, res) => {
    const { patientId, diagnosis, treatment, prescription } = req.body;
    const newRecord = new MedicalRecord({ patientId, diagnosis, treatment, prescription });

    newRecord
        .save()
        .then(() => res.json({ message: 'Medical record added successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error adding medical record: ' + err.message }));
};

exports.getMedicalRecords = (req, res) => {
    const { patientId } = req.params;

    MedicalRecord.find({ patientId })
        .then((records) => res.json(records))
        .catch((err) => res.status(500).json({ error: 'Error fetching medical records: ' + err.message }));
};
