const express = require('express');

const graphqlHTTP = require('express-graphql').graphqlHTTP;


const mySchema = require('./models/postschema');
const mongoose = require('mongoose');
var cors = require('cors');
var User = require('./models/usermodel');


const session = require('express-session');
const bodyParser = require('body-parser');







const MONGO_URI ="mongodb+srv://nasir:5pcEwh7TQRtxQSK@cluster0.74zah.mongodb.net/blog?retryWrites=true&w=majority"




mongoose.connect(MONGO_URI, () => {
  console.log("connected to mongo db");
});




const port = 5000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const user = User.findOne({ username }).exec();
  if (!user) {
    res.send("user not found");
  } else {
    const isValid = user.password === password;
    if (isValid) {
      req.session.user = user;
      res.send("login successful");
    } else {
      res.send("password incorrect");
    }
  }
})



app.use("/signup", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const user = new User({
    email: email,
    password: password,
    username: username

  })
  user.save()
  res.send("user created")

  
})

app.use('/graphql', graphqlHTTP({
    schema: mySchema,
  graphiql: true,
  }),
);








app.listen(port, () => { 
  console.log(`Graphql Server is running on port ${port}`);
})
