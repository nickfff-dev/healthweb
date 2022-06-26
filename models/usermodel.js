const mongoose = require('mongoose');
const bcrypt = require('bcrypt')



const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  username: String,
  createdPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  editedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],



})

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
