
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {type: String, trim: true, },
    password:{type: String, trim: true, },
    phoneNumber:{type: String},
    hospitalRole:{type: Number},
});


module.exports = mongoose.model('User', userSchema);