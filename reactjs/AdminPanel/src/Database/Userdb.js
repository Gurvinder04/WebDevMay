const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const server = express();

server.use(express.json())
server.use(cors())

  mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'));
  
const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
const User = mongoose.model('User',StatUser)

server.get('/users',async(req,res)=>{
  console.log('showing customers')
 const data = await User.find()
  res.send(data)

})


server.post('/sign',(req,res)=>{
  console.log('entered')
  const password = bcrypt.hashSync(req.body.password,10)
  console.log(req.body)
  const user_data = new User({ firstname: req.body.firstname,lastname: req.body.lastname, email: req.body.email, password:password })
    user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
        
})

// server.post('/login',(req, res) => {
//   console.log('entered login')
//    const {email,password} = req.body
//    console.log(email,password)
//     User.find({Email:email,Password:password})
//     .then(result=>{
//      //console.log(result)
//      if(result.length >0){
//        console.log(result.length)
//        const currentuser = {
//           mail:result[0].Email,
//           pass :result[0].Password
//           }
//           res.status(200).send(currentuser)
//          console.log(currentuser)
        
//      }
//      else{
//          res.status(400).send(0)
     
//     }
//      })
   
//   })

server.post('/login',(req, res) => {
  console.log('entered login')
   const {email,password} = req.body
   console.log(email,password)
    User.findOne({Email:email})
    .then(user=>{
     //console.log(result)
     if(user.length ===1){
       console.log(user.length)
       const loggedpass = user[1].password
       console.log(loggedpass)
      const isPasscorrect =  bcrypt.compareSync(password,loggedpass)
        if(isPasscorrect){
         res.json({msg:'password is correct'})
     }else{
         res.json({msg:' password is incorrect'})
     }   
     }
     else{
      res.json({
          msg:'username or password incorrect'
      })
  }
     })
   
  })



server.listen(4000,()=>console.log('I M running on 4000'))