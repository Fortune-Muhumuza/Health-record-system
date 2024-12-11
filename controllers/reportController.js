// In `reportController.js`
exports.getPatientStats = (req, res) => {
    // Example of basic patient stats, can be expanded to more complex reports
    Patient.aggregate([
        { $group: { _id: '$patientGender', totalPatients: { $sum: 1 } } },
    ])
        .then((stats) => res.json(stats))
        .catch((err) => res.status(500).json({ error: 'Error generating patient stats: ' + err.message }));
};

exports.getFinancialSummary = (req, res) => {
    Billing.aggregate([
        { $group: { _id: null, totalAmount: { $sum: '$amount' }, totalPaid: { $sum: '$paidAmount' } } },
    ])
        .then((summary) => res.json(summary))
        .catch((err) => res.status(500).json({ error: 'Error generating financial summary: ' + err.message }));
};
