const express = require('express');

const graphqlHTTP = require('express-graphql').graphqlHTTP;

const mySchema = require('./models/postschema');
const mongoose = require('mongoose');
var cors = require('cors');

const session = require('express-session');





const MONGO_URI ="mongodb+srv://nasir:5pcEwh7TQRtxQSK@cluster0.74zah.mongodb.net/blog?retryWrites=true&w=majority"




mongoose.connect(MONGO_URI, () => {
  console.log("connected to mongo db");
});




const port = 5000;
const app = express();

app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema: mySchema,
  graphiql: true,
  }),
);






app.listen(port, () => { 
  console.log(`Graphql Server is running on port ${port}`);
})
