const express = require('express')
const mongoose =require('mongoose')
const server = express();

//middleware
server.use(express.json())

mongoose.connect('mongodb://localhost:27017/UserInfo',(err)=>console.log('connected'))

const SignSchema = new mongoose.Schema({
    Username:{
        type:String,
        unique:true
    },
    email:String,
    password:string
})

const User = mongoose.model('User',SignSchema)

server.post('/',(req,res)=>{

})