const Patient = require('../models/PatientModel');

exports.getReceptionHome = (req, res) => {
    res.render('receptionHome');
};

exports.postAddReceptionPatient = (req, res) => {
    const patientFirstName = req.body.patientFirstName;
    const patientLastName = req.body.patientLastName;
    const patientGender = req.body.patientGender;
    const patientAge = req.body.patientAge
    const date = new Date();
  
    const newReceptionPatient = new Patient({
      patientFirstName,
      patientLastName,
      patientGender,
      patientAge,
      date,
    });
  
    newReceptionPatient
      .save()
      .then(() => res.json('Patient added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  };