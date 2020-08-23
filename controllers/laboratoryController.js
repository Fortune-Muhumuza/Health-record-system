const Patient = require('../models/PatientModel');

exports.getLaboratoryHome = (req, res) => {
    res.render('laboratoryHome');
};

exports.postAddPatientLabResults = (req, res) => {
    const patientBloodgroup = req.body.patientBloodgroup;
    const patientBloodCellCount = req.body.patientBloodCellCount;
    const patientUrinalysis = req.body.patientUrinalysis;
    const patientSputumResults = req.body.patientSputumResults
    const date = new Date(); //I think i should include time instead, what do you guys think?
  
    const newLaboratoryPatient = new Patient({
      patientBloodgroup,
      patientBloodCellCount,
      patientUrinalysis,
      patientSputumResults,
      date,
    });
  
    newLaboratoryPatient
      .save()
      .then(() => res.json('Patient added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  };