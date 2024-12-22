// models/HealthWorkerModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthWorkerSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    role: {
        type: String,
        enum: ['Doctor', 'Nurse', 'Dentist', 'Lab Technician', 'Pharmacist', 'Surgeon', 'Therapist', 'Other'],
        required: true,
    },
    department: { type: String, required: true }, // e.g., "Cardiology", "Radiology", etc.
    qualifications: { type: [String], required: true }, // e.g., ["MBBS", "MD", "BSc Nursing"]
    contactInfo: {
        phone: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
    },
    schedule: {
        workingDays: { type: [String], default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
        shift: { type: String, enum: ['Morning', 'Afternoon', 'Night'], default: 'Morning' },
    },
    employmentDate: { type: Date, default: Date.now }, // Date of joining
    isActive: { type: Boolean, default: true }, // Active status
}, { timestamps: true });

module.exports = mongoose.model('HealthWorker', healthWorkerSchema);
