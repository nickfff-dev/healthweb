const mongoose = require('mongoose');




const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  username: String,
  email: String,




})




const User = mongoose.model('User', userSchema);

module.exports = User;
