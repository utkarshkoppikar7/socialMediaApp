const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require('./models/user');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'build')));

let logs = []

const uri = "mongodb+srv://utkarsh:mypassword@utkarshcluster.n0muw.mongodb.net/SocialMedia?retryWrites=true&w=majority";

mongoose.connect(uri , { useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex :true})
  .then((result)=> console.log("Connected!!!"))
  .catch((err) => console.log(err));
// set this Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//schema


app.get('/',(req,res) =>{
  res.sendFile(path.join(__dirname,'build','index.html'));
}).listen(5000);

app.get('/log',(req,res) => {
      const user = new User(
        {
          username: 'Ramesh',
          password: '123456'
        }
      );

      user.save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
});

app.get('/users',(req,res) => {
  User.find()
    .then((result) => {
      for(let i=0;i<result.length;i++){
        logs.push(result[i].username);
      }
      res.send(logs);
    })
    .catch((err) => {
      console.log(err);
    });
});

