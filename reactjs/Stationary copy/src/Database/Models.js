require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,(err)=>console.log('connected....'))

const ProductSchema = mongoose.Schema({
    productname:String,
    category:String,
    description:String,
    price:String,
    quantity:String,
    image:String,
    feature:Boolean
})

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
module.exports = Product = mongoose.model('Product',ProductSchema)
module.exports = User = mongoose.model('User',StatUser)
