const express = require('express');

const graphqlHTTP = require('express-graphql').graphqlHTTP;

const mySchema = require('./models/postschema');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

const session = require('express-session');
const jsonwebtoken = require('jsonwebtoken');





const MONGO_URI ="mongodb+srv://nasir:5pcEwh7TQRtxQSK@cluster0.74zah.mongodb.net/blog?retryWrites=true&w=majority"




mongoose.connect(MONGO_URI, () => {
  console.log("connected to mongo db");
});




const port = 5000;
const app = express();

// setup cors for graphql endpoint

app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema: mySchema,
  graphiql: true,
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
var routes = require('./routes/userroute');
routes(app);






app.listen(port, () => { 
  console.log(`Graphql Server is running on port ${port}`);
})
