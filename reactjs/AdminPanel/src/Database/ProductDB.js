const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const admin = express()
//middleware
admin.use(express.json())
admin.use(cors())

mongoose.connect('mongodb://localhost:27017/Stationary',(err)=>console.log('connected....'))

const ProductSchema = mongoose.Schema({
    ProductName:String,
    Description:String,
    Price:String
})


const Product = mongoose.model('Product',ProductSchema)

admin.post('/product',(req,res)=>{
    const newProduct = new Product({ ProductName: req.body.productname,Description: req.body.description, Price: req.body.rate})
    newProduct.save()
        .then(result => {
            console.log('successfully saved')
        })
})


admin.listen(7070,(err)=>console.log('running on 7070'))