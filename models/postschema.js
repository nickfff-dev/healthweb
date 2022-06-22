const find = require("lodash/find");
const filter = require("lodash/filter");
const Posts = require("../data/blog");
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
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    published: { type: GraphQLBoolean },
    author: { type: GraphQLString },
    category: { type: GraphQLString },
    trending: { type: GraphQLBoolean },
    featured: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "PostQuery",
  fields: () => ({
    posts: {
      args: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        published: { type: GraphQLBoolean },
        author: { type: GraphQLString },
        category: { type: GraphQLString },
        trending: {type: GraphQLBoolean},
        featured: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString,
        },
      },
      type: new GraphQLList(PostType),
      
      resolve: (root, args) => {
        if (args.id) { 
          return find(Posts, { id: args.id });  
        }
        if (Object.keys(args).length) {
          return filter(Posts, args);
        }
        return Posts;
      },
    },
  })

});


const MutationType = new GraphQLObjectType({
  name: "PostMutation",

  fields: () => ({
    createPost: {
     
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        published: { type: new GraphQLNonNull(GraphQLBoolean) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },  
        trending: { type: new GraphQLNonNull(GraphQLBoolean) },
        featured: { type: new GraphQLNonNull(GraphQLBoolean) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },

      },
      type: PostType,
      resolve: (root, args) => {
       
        const post = {
          id: Posts.length + 1,
          title: args.title,
          body: args.body,
          published: args.published,
          author: args.author,
          category: args.category,
          trending: args.trending,
          featured: args.featured,
          createdAt: args.createdAt,

        }
        // open jaon and save to json
        Posts.push(post);
        return post;
      }
    },
    updatePost: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        published: { type: GraphQLBoolean },
        trending: { type: GraphQLBoolean },
        featured: { type: GraphQLBoolean },


      },
      type: PostType,
      resolve: (root, args) => { 
        const post = find(Posts, { id: args.id });
        if (args.hasOwnProperty("published")) {
          post.published = args.published;
        }
        if (args.hasOwnProperty("trending")) { 
          post.trending = args.trending;
        }
        if (args.hasOwnProperty("featured")) { 
          post.featured = args.featured;
        }
        return post;

      }
    }
  })
})



const mySchema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

module.exports = mySchema;


//  mutation {
//   createPost(title: "nasir", author: "tuma", category: "kitu", featured: true, createdAt: "hapa", trending: true, published: true, body: "kule") {
//     id
//     title
//     author
//     category
//     featured
//     trending
//     createdAt
//     published
//   }
// }

// mutation {
//   updatePost( id:2, featured: false, trending: false, published: false) {
//     id
//     title
//     author
//     category
//     featured
//     trending
//     createdAt
//     published
//   }
// }
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var graphql = JSON.stringify({
//   query: "mutation {\r\n  updatePost( id:2, featured: true, trending: true, published: true) {\r\n    id\r\n    title\r\n    author\r\n    category\r\n    featured\r\n    trending\r\n    createdAt\r\n    published\r\n  }\r\n}\r\n",
//   variables: {}
// })
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: graphql,
//   redirect: 'follow'
// };

// fetch("http://localhost:5000/graphql", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
