//npm i express mongoose --save

//import express and mongoose
const express = require('express')
const mongoose = require('mongoose')

const app = express();

//db connection
mongoose.connect('mongodb://localhost:27017/mongoExpress', (err) =>
          {
            console.log('connnected to db')
       });

//create post schema
const postSchema = mongoose.Schema({
    title:String,
    content:String,
    date:String
})

//compile to model
const Post = mongoose.model('Post',postSchema)





//import middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Newspaper RESTfull APIv1.0")
})

app.get('/posts',(req,res)=>{
    //retrieve all post from mongodb and response them as json
    Post.find({})
    .then(posts=>{
        console.log(posts)
        res.json({
            message:'ok',
            data:posts
        })
    })
})

app.post('/post',(req,res)=>{
    const {title,content} = req.body
    const post = new Post({title,content,date:new Date()})
    post.save()
    .then(answer=>{
        res.json({
            mesage:'saved',
            data:answer
        })
    })
})

//update
//http://localhost:8080/post/6332a8d7b572d6ebe58f43eb
app.put('/post/:id',(req,res)=>{
    const {id} = req.params   //this automatically extract the id from the body
    Post.findByIdAndUpdate(id,req.body)
    .then(result=>{
        res.json({
            message:'updated',
            data:result
        })
    })
})


//delete
//http://localhost:8080/post/6332a8d7b572d6ebe58f43eb
app.delete('/post/:id',(req,res)=>{
    const {id} = req.params
     Post.findByIdAndDelete(id)
     .then(result=>{
        res.json({
            message:'Deleted',
            data:result
        })
     })
})

//this all method is for all method like get,put,post,delete.this display the messag when user try to delete or get or update something which doesnt exist
app.all('*',(req,res)=>{
    res.json({
        message:'NOT FOUND !'
    })
})


//set listen port
app.listen(8080,()=>console.log('server is running.....'))