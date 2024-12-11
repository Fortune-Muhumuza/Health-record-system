const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\+?[1-9]\d{1,14}$/.test(v); // Validates international phone numbers
        },
        message: props => `${props.value} is not a valid phone number!`,
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Validates email format
        },
        message: props => `${props.value} is not a valid email!`,
      },
    },
    hospitalRole: {
      type: String,
      enum: ['admin', 'doctor', 'nurse', 'receptionist', 'lab_technician'],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // Indicates if the user account is active
    },
    roles: {
      type: [String], // Array of roles for fine-grained permissions
      default: [],
    },
    lastLogin: {
      type: Date, // Tracks the last login time
      default: null,
    },
    resetPasswordToken: {
      type: String, // Token for password reset
      default: null,
    },
    resetPasswordExpires: {
      type: Date, // Expiration date for the password reset token
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set when the document is created
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically updated with middleware
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

// Pre-save middleware to update the `updatedAt` field
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);
