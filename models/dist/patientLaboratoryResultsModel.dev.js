"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var patientLaboratoryResultsSchema = new Schema({
  patientBloodgroup: {
    type: String,
    required: true
  },
  patientBloodCellCount: {
    type: String,
    required: true
  },
  patientUrinalysis: {
    type: String,
    required: true
  },
  patientSputumResults: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
var patientLaboratoryResults = mongoose.model('patientLaboratoryResult', patientLaboratoryResultsSchema);
module.exports = patientLaboratoryResults;