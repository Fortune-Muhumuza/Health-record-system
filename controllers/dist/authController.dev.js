"use strict";

User = require('../models/User');

var session = require('express-session');

var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var accessTokenSecret = 'youraccesstokensecret';

exports.register = function _callee(req, res) {
  var _req$body, email, password, user, salt, payload;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context.sent;

          if (!user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Already Exists"
          }));

        case 7:
          user = new User({
            email: email,
            password: password
          });
          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 10:
          salt = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 13:
          user.password = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(user.save());

        case 16:
          payload = {
            user: {
              id: user.id
            }
          };
          jwt.sign(payload, "randomString", {
            expiresIn: 10000
          }, function (err, token) {
            if (err) throw err;
            res.status(200).json({
              token: token
            });
          });
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0.message);
          res.status(500).send("Error in Saving");

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 20]]);
};

exports.login = function _callee2(req, res) {
  var _req$body2, email, password, user, isMatch, payload;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "User Not Exist"
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "Incorrect Password !"
          }));

        case 12:
          payload = {
            user: {
              id: user.id
            }
          };
          jwt.sign(payload, "secret", {
            expiresIn: 3600
          }, function (err, token) {
            if (err) throw err;
            res.status(200).json({
              token: token
            });
          });
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          res.status(500).json({
            message: "Server Error"
          });

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.createProfile = function _callee3(req, res) {
  var userProfile, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userProfile = new User({
            phoneNumber: req.body.phoneNumber,
            age: req.body.age,
            location: req.body.location
          });
          _context3.next = 4;
          return regeneratorRuntime.awrap(userProfile.save());

        case 4:
          result = _context3.sent;
          res.send(result);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.send('error creating profile');

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};