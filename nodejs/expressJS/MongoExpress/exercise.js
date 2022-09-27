
const express = require('express')
const mongoose = require('mongoose')


const server = express();

//import middleware
server.use(express.json())

//db connection
mongoose.connect('mongodb://localhost:27017/mongoExpress', (err) => {
    console.log('Mongo is running.....')
})


//create schema
const todoSchema = mongoose.Schema({
    StudentName:String,
    Course:String,
    Project: String,
    completed:{
        type:Boolean,
        default:false
    }
})

//create model of schema
const Todo = mongoose.model('Todo', todoSchema)

//get method
server.get('/todos', (req, res) => {
    // Todo.find({})
    //     .then(result => {
    //         res.json({
    //             mesage: 'your data is here.....',
    //             data: result
    //         })
    //     })

    
    if(req.query.Course!==undefined){
        Todo.find
        (req.query.Course)
        .then(result=>{
            res.json({
                message:'query',
                data:result
            })
        })
    }
})

//post method
server.post('/todo', (req, res) => {
    const {StudentName,Course,Project} = req.body
    const todo1 = new Todo({StudentName,Course,Project})
    todo1.save()
        .then(result => {
            res.json({
                message: 'your data is saved',
                data: result
            })

        })
})

//update method
server.put('/todo/:project', (req, res) => {
    const {project} = req.params
    Todo.findOneAndUpdate(project,req.body)
        .then(result => {
            res.json({
                message: 'updated',
                data: result
            })
        })
})

// //delete metod
server.delete('/todo/:Project', (req, res) => {
    const {project} = req.params
    Todo.findOneAndDelete(project)
        .then(result => {
            res.json({
                message: 'deleted',
                data: result
            })
        })
    // Todo.deleteOne({userId:userId})
    // .then(result=>{
    //     res.json({
    //         msg:'ok',
    //         data:result
    //     })
    // })
   
})

//all method
server.all('*', (req, res) => {
    res.json({
        message: 'INVALID !'
    })
})
//set listen port
server.listen(7070, () => console.log('Express is running.....'))