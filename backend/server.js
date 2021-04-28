const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5069;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://utkarsh:mypassword@utkarshcluster.n0muw.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Connected Mongo DB successfully!!");
  client.close();
});


app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
})

app.get('/',(req,res)=>{
    res.send("HELLO");
});