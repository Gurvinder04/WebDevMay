const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const { Link } = require('react-router-dom');
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


server.post('/sign',(req,res)=>{
  console.log('entered')
  const user_data = new User({ Firstname: req.body.firstname,Lastname: req.body.lastname, Email: req.body.email, Password:req.body.password })
    user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
})

server.post('/login',(req, res) => {
  console.log('entered login')
   const {email,password} = req.body
   console.log(email,password)
    User.find({Email:email,Password:password})
    .then(result=>{
     //console.log(result)
     if(result.length >0){
       console.log(result.length)
       const currentuser = {
          mail:result[0].Email,
          pass :result[0].Password
          }
         // res.status(200).send(currentuser)
         console.log(currentuser)
        
     }
     else{
         res.status(400).send(0)
     
    }
     })
   
  })



server.listen(4000,()=>console.log('I M running on 4000'))