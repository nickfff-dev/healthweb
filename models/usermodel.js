const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  createdPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  editedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],



})

const User = mongoose.model('User', userSchema);

module.exports = User;
