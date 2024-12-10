import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phoneNumber: {
    type: String,
    match: [/^\d{10}$/, 'Please use a valid 10-digit phone number.'],
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'other',
  },
  address: {
    type: String,
    trim: true,
  },
  securityQuestion: {
    type: String,
  },
  referralSource: {
    type: String,
    enum: ['socialMedia', 'friend', 'advertisement', 'other'],
    default: 'other',
  },
  termsAccepted: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (value) {
        return value === true;
      },
      message: 'You must accept the terms and conditions.',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
