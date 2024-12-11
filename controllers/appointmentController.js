// In `appointmentController.js`
const Appointment = require('../models/AppointmentModel');

exports.bookAppointment = (req, res) => {
    const { patientId, doctorId, appointmentDate, reason } = req.body;
    const newAppointment = new Appointment({ patientId, doctorId, appointmentDate, reason });

    newAppointment
        .save()
        .then(() => res.json({ message: 'Appointment booked successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error booking appointment: ' + err.message }));
};

exports.getAppointments = (req, res) => {
    Appointment.find()
        .then((appointments) => res.json(appointments))
        .catch((err) => res.status(500).json({ error: 'Error fetching appointments: ' + err.message }));
};

exports.getAppointmentById = (req, res) => {
    const { id } = req.params;

    Appointment.findById(id)
        .then((appointment) => {
            if (!appointment) return res.status(404).json({ error: 'Appointment not found!' });
            res.json(appointment);
        })
        .catch((err) => res.status(500).json({ error: 'Error fetching appointment: ' + err.message }));
};

exports.updateAppointment = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    Appointment.findByIdAndUpdate(id, updates, { new: true })
        .then((updatedAppointment) => {
            if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found!' });
            res.json({ message: 'Appointment updated successfully!', updatedAppointment });
        })
        .catch((err) => res.status(500).json({ error: 'Error updating appointment: ' + err.message }));
};

exports.deleteAppointment = (req, res) => {
    const { id } = req.params;

    Appointment.findByIdAndDelete(id)
        .then((deletedAppointment) => {
            if (!deletedAppointment) return res.status(404).json({ error: 'Appointment not found!' });
            res.json({ message: 'Appointment canceled successfully!' });
        })
        .catch((err) => res.status(500).json({ error: 'Error deleting appointment: ' + err.message }));
};
