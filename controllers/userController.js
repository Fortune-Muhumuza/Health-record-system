const User = require('../models/userModel');


exports.getUserLogin = (req, res) => {
    res.render('login');
}