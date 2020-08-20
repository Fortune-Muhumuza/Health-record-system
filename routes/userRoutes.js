const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');



router.get('/user/login', userController.getUserLogin);


module.exports = router;
