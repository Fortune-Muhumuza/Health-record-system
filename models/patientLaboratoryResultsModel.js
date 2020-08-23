const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientLaboratoryResultsSchema = new Schema({
  patientBloodgroup: {type: String, required: true},
  patientBloodCellCount: {type: String, required: true},
  patientUrinalysis: {type: String, required: true},
  patientSputumResults: {type: String, required: true},
  date: {type: Date, required: true},
}, 
);

const patientLaboratoryResults = mongoose.model('patientLaboratoryResult', patientLaboratoryResultsSchema);

module.exports = patientLaboratoryResults;