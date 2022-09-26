//import expres module
const express = require('express')
const app = express();

//impor env variable
require('dotenv').config()

//import bodyParser
const bodyParser = require('body-parser')

//use bodyParser middleware
app.use(bodyParser({
    extended:true
}))

//middleware
function isUserLogged(req,res,next){
    const {username} = req.query
    if(username!=='admin'){
        res.status(401).send('Unauthorized')
    }else{
        next()
    } 
}

//check if token exist
function isTokenExist(req,res,next){
    console.log(req.headers.authorization)
}



//get request
app.get('/',isTokenExist,(req,res)=>{
    res.json([{id:1,title:'Loreum ipsum',body:'loreum ipsum content'},{id:2,title:"banner title",body:"banner content"}])
})

//post request
app.post('/',isUserLogged,(req,res)=>{
    //mongo should save req body here
    const {id,title,body} = req.body
    res.json({
        id,
        title,
        body
    })
})

//PUT method
app.put('/',(req,res)=>{
    const {id} = req.query
    const {title,body} = req.body
    res.json({
        title,
        body,
        message: `${id} is updated`
})
})

//delete method
app.delete('/',(req,res)=>{
    const {id} = req.query
    const {_id} = req.body
    res.json({
        message: `${id} deleted | ${_id} deleted`
    })
})





//set listening port
app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
})