const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: String,
  title: String,
  body: String,
  author: String,
  createdAt: String,
  updatedAt: String,
  published: Boolean,
  trending: Boolean,
  featured: Boolean,
  coverImage: String,
  category: String,
  timetoRead: String,
  

}, )


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
