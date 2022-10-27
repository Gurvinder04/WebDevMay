const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const server = express();

server.use(express.json())
server.use(cors())

  mongoose.connect('mongodb://localhost:27017/Stationary',(err)=>console.log('connected....'));
  
const StatUser =mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Phone:Number,
})
const User = mongoose.model('User',StatUser)