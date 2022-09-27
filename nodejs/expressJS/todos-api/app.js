const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const TodoModel = require("./model")
mongoose.connect(process.env.MONGO_URI, (err) => console.log("connected"))
const {home,todos,saveTodo,notfound} = require('./controller')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/', home)

// get all todos
app.get('/todos', todos)

// save a todo
app.post('/todo', saveTodo)

// not found endpoint
app.get('*', notfound)

app.listen(process.env.PORT)