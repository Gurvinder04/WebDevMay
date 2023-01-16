require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const server = express();
var cookie = require('cookie');


server.use(express.json())
server.use(cors())


  mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'));
  //mongoose.connect('mongodb://localhost:27017/CustomerData',(err)=>console.log('connected....'));
  
const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    tokens:{
      type:Object
    }
})
const User = mongoose.model('User',StatUser)
 

server.post('/sign',(req,res)=>{
  console.log('entered')
  const password = bcrypt.hashSync(req.body.password,10)
  console.log(req.body)
  const user_data = new User({
     firstname: req.body.firstname,
     lastname: req.body.lastname, 
     email: req.body.email, 
     password:password,
     tokens : jwt.sign({_id:this._id},process.env.SECRET_KEY)
     })
     res.cookie("firstjwt",user_data.tokens,{
      httpOnly:true
     })
     console.log(cookie)
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

const IsTokenExist=(req,res,next)=>{
  console.log(req.query)
  const token = this.tokens
  console.log(token)
  jwt.verify(token,"nevereverthinkyouarealonewaheguruisalwayswithyou",(err,decode)=>{
    if(decode !==undefined){
      req.user=decode
      next()
    }
    else{
      console.log('taaraaaaaaa error coming')
    }
  })

}

server.post('/login',IsTokenExist,(req, res) => {
  console.log('entered login')
   const {email,password} = req.body
   console.log(email,password)
    User.find({Email:email})
    .then(user=>{
     //console.log(result)
     if(user.length >0){
       console.log(user)
       const loggedpass = user[0].user.password
       console.log('token verified')
    //    const isPasscorrect =  bcrypt.compareSync(password,loggedpass)
    //    if(isPasscorrect){
    //     res.json({msg:'password is correct'})
    // }else{
    //     res.json({msg:' password is incorrect'})
    // }   
     }
     else{
      res.json({
          msg:'username or password incorrect'
      })
  }
     })
   
  })



server.listen(4000,()=>console.log('I M running on 4000'))