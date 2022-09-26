//import express module
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const { response } = require('express')

//use bodyParser middleware
server.use(bodyParser({
    extended:true
}))



//homepage http request endpoint
server.get('/',(request,response)=>{
    // http://localhost:8080?username=admin&password=123
    // console.log(request.query)
    // console.log(request.body)
    
    // response.json(request.query)    //response with url queries
    //display HTML
    // response.send('HELLO WORLD')

    //display as JSON data
    // response.json({
    //     id:1,
    //     username:'admin'
    // })
   
    // response.json([{id:1,name:'Gurvinder'},{id:2,name:'Manmeet'}])
})

server.get('/:id',(request,response)=>{
    console.log(request.params)
    response.json({id:1,paramResult:request.params})
})

//post HTTP request
server.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        username:req.body.username,
        password:req.body.password
    })
})



server.listen(8080,()=>{      //set port no
    console.log('server is running on 8080')
})