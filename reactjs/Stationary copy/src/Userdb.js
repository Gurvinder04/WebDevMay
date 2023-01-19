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



  mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'));
  //mongoose.connect('mongodb://localhost:27017/CustomerData',(err)=>console.log('connected....'));
  
const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    tokens:[{
      token:{
        type:String
      }
    
      }]
})
const User = mongoose.model('User',StatUser)
 
console.log(process.env.SECRET_KEY)

server.get('/hidden',authorize,(req,res)=>{
       if(error){
        console.log('getting error')
       }
       else{
        console.log('I m Fine')
       }
       let cid = cid
       const loggedUser=  User.find({_id:cid})
       console.log('token user detail',loggedUser)
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
  //  tokens : jwt.sign({_id:this._id},process.env.SECRET_KEY)   normal
     })
    let tokens =jwt.sign({_id:this._id},process.env.SECRET_KEY)  //abnormal
     //user_data.tokens=user_data.tokens.concat({token:token})     //abnormal
    
     res.cookie("firstjwt",tokens,{
      // domain: "localhost",
      // path: "/",
      httpOnly: true
     });
     console.log('userdb toke is',tokens)
  user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
        //res.status(200).send(JSON.stringify(tokens))
})




server.post('/login',(req, res) => {
  console.log('entered login')
   const {email,password} = req.body
   console.log(email,password)
    User.findOne({email:email})
    .then(user=>{
      if(user){     //abnormal 1
     console.log('user is',user)
   let tokens = jwt.sign({_id:user._id},process.env.SECRET_KEY) //normal
   //localStorage.setItem('public',tokens)
   //let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)  //abnormal
     //user.tokens=token.concat({token:token})     //abnormal
     
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
    }
        else{                                     //abnormal 1
          console.log('login else part running')   //abnormal 1
          console.log(user)                         //abnormal 1
          res.status(404).send(user)                //abnormal 1
        }                                           //abnormal 1
     })                                              
     
})
  



server.listen(4000,()=>console.log('I M running on 4000'))

module.exports = User