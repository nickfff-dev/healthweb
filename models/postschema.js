const mongoose = require('mongoose');
const Post = require("./postmodel");


const {
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    published: { type: GraphQLBoolean },
    author: { type: GraphQLString },
    category: { type: GraphQLString },
    trending: { type: GraphQLBoolean },
    featured: { type: GraphQLBoolean },
    coverImage: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "PostQuery",
  fields: () => ({
    posts: {
      args: {
        id: { type: GraphQLString },
     
      },
      type: new GraphQLList(PostType),
      
      resolve: (root, args) => {
        const posts = Post.find(args).exec();
        if (!posts) {
          throw new Error("Error");
        }
        return posts;
      },
    },
    singlepost: {
      args: {
       id: { type: new GraphQLNonNull(GraphQLString) },
        
      },
      type: PostType,
      resolve: (root, args) => { 
        const post = Post.findOne(args).exec();
        if (!post) {
          throw new Error("Error");
        }
        return post;
        
      }
    },
    
  })

});

var idVal = new mongoose.Types.ObjectId().toHexString()
console.log(idVal)
const MutationType = new GraphQLObjectType({
  name: "PostMutation",

  fields: () => ({
    createPost: {
     
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        published: { type: new GraphQLNonNull(GraphQLBoolean) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },  
        trending: { type: new GraphQLNonNull(GraphQLBoolean) },
        featured: { type: new GraphQLNonNull(GraphQLBoolean) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
        coverImage: { type: new GraphQLNonNull(GraphQLString) },

      },
      type: PostType,
      resolve: (root, args) => {
       
        const post = new Post(args);
        post.save();
        return post;

        
      }
    },
    updatePost: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        published: { type: GraphQLBoolean },
        trending: { type: GraphQLBoolean },
        featured: { type: GraphQLBoolean },
        coverImage: { type: GraphQLString },
        category: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        updateAt: { type: GraphQLString },
        
      },
      type: PostType,
      resolve: (root, args) => { 
        const post = Post.findOne({ id: args.id })
        if (!post) { 
          throw new Error("Post not found");
        } 
        // update post field depending on the arg pased
        Post.findOneAndUpdate({ id: args.id }, { $set: args }, { new: true }).exec();
        return post
       

       

      }
    }
  })
})



const mySchema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

module.exports = mySchema;


