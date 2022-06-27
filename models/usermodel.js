const mongoose = require('mongoose');
const bcrypt = require('bcrypt')



const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  username: String,
  createdPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  editedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],



})




const User = mongoose.model('User', userSchema);

module.exports = User;
