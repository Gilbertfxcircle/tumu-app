
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  given_name: { type: String, required: true },
  surname: { type: String, required: true },
  dob: { type: String, required: true },
  email_or_phone: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
