const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientFirstName: { type: String, required: true, trim: true },
  patientLastName: { type: String, required: true, trim: true },
  patientMiddleName: { type: String, trim: true }, // Optional middle name
  patientGender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  patientDOB: { type: Date, required: true }, // Date of birth for accurate age calculation
  patientAge: { type: Number, required: false }, // Can be derived from DOB if needed
  contactNumber: { type: String, required: true }, // Phone number with validation
  email: { type: String, trim: true }, // Optional email field
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true, default: 'USA' },
  },
  emergencyContact: {
    name: { type: String, required: true },
    relation: { type: String, required: true },
    phone: { type: String, required: true },
  },
  insuranceDetails: {
    providerName: { type: String, required: true },
    policyNumber: { type: String, required: true },
    coverageType: { type: String, enum: ['Basic', 'Comprehensive'], required: true },
    expirationDate: { type: Date, required: true },
  },
  medicalHistory: [
    {
      condition: { type: String, required: true },
      diagnosisDate: { type: Date, required: true },
      treatment: { type: String },
      notes: { type: String },
    },
  ],
  currentMedications: [
    {
      medicationName: { type: String, required: true },
      dosage: { type: String, required: true },
      frequency: { type: String, required: true },
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ],
  allergies: [
    {
      allergen: { type: String, required: true },
      reaction: { type: String },
      severity: { type: String, enum: ['Mild', 'Moderate', 'Severe'] },
    },
  ],
  labResults: [
    {
      testName: { type: String, required: true },
      result: { type: String, required: true },
      unit: { type: String },
      normalRange: { type: String },
      date: { type: Date, required: true },
    },
  ],
  appointments: [
    {
      doctorName: { type: String, required: true },
      specialization: { type: String },
      date: { type: Date, required: true },
      time: { type: String, required: true },
      notes: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true }); // Automatically handle createdAt and updatedAt fields

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
