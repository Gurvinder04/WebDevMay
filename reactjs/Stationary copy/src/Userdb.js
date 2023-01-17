require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const server = express();
var cookie = require('cookie');
var cookieParser = require('cookie-parser')
const authorize = require('../src/Middleware/authorize')


server.use(express.json())
server.use(cookieParser())
// server.use(cors({
//   origin:'http://localhost:4000',
//   credentials:true
// }))


  //mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'));
  mongoose.connect('mongodb://localhost:27017/CustomerData',(err)=>console.log('connected....'));
  
const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    tokens:{
      type:String
      }
})
const User = mongoose.model('User',StatUser)
 
console.log(process.env.SECRET_KEY)

server.get('/hidden',authorize,(req,res)=>{
       // res.sendStatus(201)
})

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
    //tokens:this.tokens.concat({token:token})
     })
    
     res.cookie("firstjwt",user_data.tokens,{
      // domain: "localhost",
      // path: "/",
      httpOnly: true
     });
     console.log(user_data.tokens)
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

server.post('/login',(req, res) => {
  console.log('entered login')
   const {email,password} = req.body
   console.log(email,password)
    User.find({email:email})
    .then(user=>{
     console.log('user is',user)
    let tokens = jwt.sign({_id:user._id},process.env.SECRET_KEY)
    
    res.cookie("firstjwt",tokens,{
      expires:new Date(Date.now() + 50000),
      // domain: "localhost",
      // path: "/",
      httpOnly: true
     });
     console.log('user logintoken is',tokens)
     //console.log(`this is checking cookie ${req.cookies.firstjwt}`)
     res.status(201).send(user)
    //  if(user.length >0){
    //    console.log(user)
    //    const loggedpass = user[0].user.password
    //    console.log('token verified')
    //    const isPasscorrect =  bcrypt.compareSync(password,loggedpass)
    //    if(isPasscorrect){
    //     res.json({msg:'password is correct'})
    // }else{
    //     res.json({msg:' password is incorrect'})
    // }   
     //}
  //    else{
  //     res.json({
  //         msg:'username or password incorrect'
  //     })
  // }
     })
})
  



server.listen(4000,()=>console.log('I M running on 4000'))

module.exports = User