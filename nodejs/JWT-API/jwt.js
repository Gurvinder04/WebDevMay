const express = require('express')
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken')
require('dotenv').config()

//use midleware
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>res.send('welcome to protected restful API'))
app.post('/login',(req,res)=>{
    const {username} = req.body
    jwt.sign({username},process.env.SECRET_Key,{
            algorithm:'HS256',
            expiresIn:'60s'
    },(err,token)=>{
        res.json({
            payload:req.body,
            token:token
        })
    })
  
})

//Istoken Valid middleware function
// const IstokenValid = (req,res,next)=>{
//     console.log(req.headers['authorization'])
//     const token = req.headers['authorization']
//     jwt.verify(token,'SECRET',(err,decoded)=>{
//         console.log(decoded)
//         if(!err){
//             req.user = decoded
//             next() 
//         }
//        else{
//         res.status(403).send('Forbidden')
//        }
//     })
// }

//retreive token as bearer
// const IstokenExist = (req,res,next)=>{
//     console.log(req.headers['authorization'].split(' ')[1])
//     const token = req.headers['authorization'].split(' ')[1]
//     jwt.verify(token,'SECRET',(err,decoded)=>{
//         console.log(decoded)
//         if(decoded !==undefined){
//             //http success response
//             req.user = decoded
//             next()
//         }
//         else{
//             res.status(403).send('Forbidden')
//         }
//     })
// }


//retreive token from URL query
const IstokenExist = (req,res,next)=>{
    console.log(req.query)
    const token = req.query.apiKey
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(decoded !==undefined){
            req.user=decoded
            next()
        }
        else{
            res.status(403).send('Forbidden')
        }
    })
}
app.get('/profile',IstokenExist,(req,res)=>{
    res.json({
        id:1,
        username:'admin',
        followers:100
    })
})

//set port number
app.listen(3000,()=>console.log('I am running ...dont dare to stop me'))