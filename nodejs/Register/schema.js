const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:String
})

const Sign = mongoose.model('Sign',RegisterSchema)
module.exports = Sign