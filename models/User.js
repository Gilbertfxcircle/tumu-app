const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  given_name: String,
  surname: String,
  dob: String,
  email: { type: String, required: true, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },
  verificationToken: String
});

module.exports = mongoose.model('User', userSchema);