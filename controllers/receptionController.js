const Patient = require('../models/PatientModel');

exports.getReceptionHome = (req, res) => {
    res.render('receptionHome');
};