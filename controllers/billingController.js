// In `billingController.js`
const Billing = require('../models/BillingModel');

exports.createBill = (req, res) => {
    const { patientId, amount, description } = req.body;
    const newBill = new Billing({ patientId, amount, description });

    newBill
        .save()
        .then(() => res.json({ message: 'Bill created successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error creating bill: ' + err.message }));
};

exports.getBillingHistory = (req, res) => {
    const { patientId } = req.params;

    Billing.find({ patientId })
        .then((bills) => res.json(bills))
        .catch((err) => res.status(500).json({ error: 'Error fetching billing history: ' + err.message }));
};

exports.processPayment = (req, res) => {
    const { billId, paymentAmount } = req.body;

    Billing.findByIdAndUpdate(billId, { $inc: { paidAmount: paymentAmount } }, { new: true })
        .then((updatedBill) => {
            if (!updatedBill) return res.status(404).json({ error: 'Bill not found!' });
            res.json({ message: 'Payment processed successfully!', updatedBill });
        })
        .catch((err) => res.status(500).json({ error: 'Error processing payment: ' + err.message }));
};
