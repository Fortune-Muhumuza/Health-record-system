// controllers/healthWorkerController.js
const HealthWorker = require('../models/HealthWorkerModel');

// 1. Add a new health worker
exports.addHealthWorker = (req, res) => {
    const {
        firstName,
        lastName,
        role,
        department,
        qualifications,
        contactInfo,
        schedule,
        employmentDate,
    } = req.body;

    const newWorker = new HealthWorker({
        firstName,
        lastName,
        role,
        department,
        qualifications,
        contactInfo,
        schedule,
        employmentDate,
    });

    newWorker
        .save()
        .then(() => res.status(201).json({ message: 'Health worker added successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error adding health worker: ' + err.message }));
};

// 2. Fetch all health workers
exports.getHealthWorkers = (req, res) => {
    HealthWorker.find()
        .then((workers) => res.json(workers))
        .catch((err) => res.status(500).json({ error: 'Error fetching health workers: ' + err.message }));
};

// 3. Fetch a specific health worker by ID
exports.getHealthWorkerById = (req, res) => {
    const { id } = req.params;

    HealthWorker.findById(id)
        .then((worker) => {
            if (!worker) return res.status(404).json({ error: 'Health worker not found!' });
            res.json(worker);
        })
        .catch((err) => res.status(500).json({ error: 'Error fetching health worker: ' + err.message }));
};

// 4. Update a health worker's information
exports.updateHealthWorker = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    HealthWorker.findByIdAndUpdate(id, updates, { new: true })
        .then((updatedWorker) => {
            if (!updatedWorker) return res.status(404).json({ error: 'Health worker not found!' });
            res.json({ message: 'Health worker updated successfully!', updatedWorker });
        })
        .catch((err) => res.status(500).json({ error: 'Error updating health worker: ' + err.message }));
};

// 5. Delete a health worker
exports.deleteHealthWorker = (req, res) => {
    const { id } = req.params;

    HealthWorker.findByIdAndDelete(id)
        .then((deletedWorker) => {
            if (!deletedWorker) return res.status(404).json({ error: 'Health worker not found!' });
            res.json({ message: 'Health worker deleted successfully!' });
        })
        .catch((err) => res.status(500).json({ error: 'Error deleting health worker: ' + err.message }));
};

// 6. Search health workers by role or department
exports.searchHealthWorkers = (req, res) => {
    const { role, department } = req.query;
    const filters = {};

    if (role) filters.role = role;
    if (department) filters.department = department;

    HealthWorker.find(filters)
        .then((workers) => res.json(workers))
        .catch((err) => res.status(500).json({ error: 'Error searching health workers: ' + err.message }));
};
