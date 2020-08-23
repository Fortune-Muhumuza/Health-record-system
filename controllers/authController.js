User = require('../models/User');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const accessTokenSecret = 'youraccesstokensecret';

exports.register = async (req, res) => {
        const {
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            user = new User({ email, password });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                "randomString", {
                expiresIn: 10000
            },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    };

    
    exports.login = async (req, res, ) => {
        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                "secret",
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    };

    exports.createProfile = async (req, res) => {
        try {
            var userProfile = new User({
                phoneNumber: req.body.phoneNumber,
                age: req.body.age,
                location: req.body.location
            });
            var result = await userProfile.save();
            res.send(result);
        } catch (error) {
            res.send('error creating profile');
        }
    };