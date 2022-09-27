const mongoose = require("mongoose")

const todosSchema = mongoose.Schema({
    username:String,
    title:String,
    desc:String
})

const Todo = mongoose.model('todos',todosSchema)

module.exports = Todo