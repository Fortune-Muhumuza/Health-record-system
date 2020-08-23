"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var patientSchema = new Schema({
  patientFirstName: {
    type: String,
    required: true
  },
  patientLastName: {
    type: String,
    required: true
  },
  patientGender: {
    type: Number,
    required: true
  },
  patientAge: {
    type: Date,
    required: true
  }
});
var receptionPatient = mongoose.model('receptionPatient', receptionPatientSchema);
module.exports = receptionPatient;