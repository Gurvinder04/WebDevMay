const mongoose = require('mongoose')
mongoose.connect('http://localhost:8080/mongoExpress',(err=>console.log('connected')))

const ProductSchema = mongoose.Schema({
    ProductName:String,
    category:String,
    Description:String,
    Price:Number,
    Image:
    {
        data: Buffer,
        contentType: String
    }
})

const Product = new mongoose.model('Product',ProductSchema)

module.exports = Product