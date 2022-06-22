const express = require( 'express');

const graphqlHTTP = require('express-graphql').graphqlHTTP;

const mySchema  = require('./models/postschema');
const session = require('express-session');












const port = 5000;
const app = express();




app.use('/graphql', graphqlHTTP({
    schema: mySchema,
  graphiql: true,
  }),
);






app.listen(port, () => { 
  console.log(`Graphql Server is running on port ${port}`);
})
