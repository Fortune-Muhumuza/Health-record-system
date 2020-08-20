const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientFirstName: { type: String, required: true },
  patientLastName: { type: String, required: true },
  patientGender: { type: Number, required: true },
  patientAge: { type: Date, required: true },
}, 
);

const receptionPatient = mongoose.model('receptionPatient', receptionPatientSchema);

module.exports = receptionPatient;