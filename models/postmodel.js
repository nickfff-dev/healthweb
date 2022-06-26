const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: String,
  title: String,
  body: String,
  author: String,
  createdAt: String,
  updatedAt: String,
 
  trending: Boolean,
  featured: Boolean,
  coverImage: String,
  category: String,
  timetoRead: String,
  

}, { timestamps: true });


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
