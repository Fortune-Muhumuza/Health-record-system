"use strict";

var Patient = require('../models/PatientModel');

exports.getLaboratoryHome = function (req, res) {
  res.render('laboratoryHome');
};

exports.postAddPatientLabResults = function (req, res) {
  var patientBloodgroup = req.body.patientBloodgroup;
  var patientBloodCellCount = req.body.patientBloodCellCount;
  var patientUrinalysis = req.body.patientUrinalysis;
  var patientSputumResults = req.body.patientSputumResults;
  var date = new Date(); //I think i should include time instead, what do you guys think?

  var newLaboratoryPatient = new Patient({
    patientBloodgroup: patientBloodgroup,
    patientBloodCellCount: patientBloodCellCount,
    patientUrinalysis: patientUrinalysis,
    patientSputumResults: patientSputumResults,
    date: date
  });
  newLaboratoryPatient.save().then(function () {
    return res.json('Patient added!');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
};