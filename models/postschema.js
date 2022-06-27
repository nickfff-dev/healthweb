const mongoose = require('mongoose');
const Post = require("./postmodel");
const User  = require("./usermodel")


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
   
    author: { type: GraphQLString },
    category: { type: GraphQLString },
    trending: { type: GraphQLBoolean, defaultValue: false },
    featured: { type: GraphQLBoolean, defaultValue: false },
    coverImage: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
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
    singlecategory: {
      args: {
       category: { type: new GraphQLNonNull(GraphQLString) },
        
      },
      type: new GraphQLList(PostType),
      resolve: (root, args) => { 
        const posts = Post.find(args).exec();
        if (!posts) {
          throw new Error("Error");
        }
        return posts;
        
      }
    },
    
  })

});


const MutationType = new GraphQLObjectType({
  name: "PostMutation",

  fields: () => ({
    createPost: {
     
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },  
        createdAt: { type: new GraphQLNonNull(GraphQLString)},
        coverImage: { type: new GraphQLNonNull(GraphQLString) },
       
        trending: { type: GraphQLBoolean, defaultValue: false },
        featured: { type: GraphQLBoolean, defaultValue: false },

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


