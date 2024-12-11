// In middleware (`authMiddleware.js`)
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const checkRole = (role) => {
    return (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(403).json({ error: 'Forbidden' });

            User.findById(decoded.userId)
                .then(user => {
                    if (user && user.roles.includes(role)) {
                        next();
                    } else {
                        res.status(403).json({ error: 'You do not have permission for this action' });
                    }
                })
                .catch(err => res.status(500).json({ error: 'Error checking user role' }));
        });
    };
};

module.exports = { checkRole };
