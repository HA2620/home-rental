const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isSeller: {
    type: Boolean
  }
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel
