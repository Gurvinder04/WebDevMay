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
    Password:String
})
const User = mongoose.model('User',StatUser)

server.post('sign',(req,res)=>{
  console.log(entered)
  const user_data = new User({ Firstname: req.body.firstname,Lastname: req.body.lastname, Email: req.body.email, Password:req.body.password })
    user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
})


server.listen(4000,()=>console.log('I M running on 4000'))