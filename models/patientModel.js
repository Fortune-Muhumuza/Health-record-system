const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientFirstName: { type: String, required: true },
  patientLastName: { type: String, required: true },
  patientGender: { type: String, required: true }, // Changed from Number to String
  patientAge: { type: Number, required: true }, // Changed from Date to Number
});

const receptionPatient = mongoose.model('receptionPatient', patientSchema); // Changed from receptionPatientSchema to patientSchema

module.exports = receptionPatient;
