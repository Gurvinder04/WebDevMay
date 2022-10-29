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
const IsUserExist = (req, res, next) => {
  const { email, password } = req.body
  User.find({ Email: email })
      .then(result => {
          console.log('hello',result)
          if (result.length === 1) {
              if (result[0].Password[0] === password) {
                  console.log('user exist')
              }
              else {
                  console.log('Incorrect password')
              }

          }
          else {
              console.log('User doesnt exist')
          }
      })
}

server.post('/sign',(req,res)=>{
  console.log('entered')
  const user_data = new User({ Firstname: req.body.firstname,Lastname: req.body.lastname, Email: req.body.email, Password:req.body.password })
    user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
})

server.post('/login', IsUserExist, (req, res) => {
  console.log('entered login')
})


server.listen(4000,()=>console.log('I M running on 4000'))