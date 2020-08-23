"use strict";

var Patient = require('../models/PatientModel');

exports.getReceptionHome = function (req, res) {
  res.render('receptionHome');
};

exports.postAddReceptionPatient = function (req, res) {
  var patientFirstName = req.body.patientFirstName;
  var patientLastName = req.body.patientLastName;
  var patientGender = req.body.patientGender;
  var patientAge = req.body.patientAge;
  var date = new Date();
  var newReceptionPatient = new Patient({
    patientFirstName: patientFirstName,
    patientLastName: patientLastName,
    patientGender: patientGender,
    patientAge: patientAge,
    date: date
  });
  newReceptionPatient.save().then(function () {
    return res.json('Patient added!');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
};