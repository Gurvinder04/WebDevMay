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
    Category:String,
    Description:String,
    Price:String,
    Quantity:String,
    Image:String
})


const Product = mongoose.model('Product',ProductSchema)

admin.get('/product',async(req,res)=>{
    console.log('showing products')
   const data = await Product.find()
    res.send(data)

})

admin.get('/product/:id',async(req,res)=>{
    console.log('with id')
    const rid = req.params.id
   const data = await Product.findById({_id:rid})
   console.log(data)
    res.send(data)
    
})

admin.post('/product',(req,res)=>{
    const newProduct = new Product({ ProductName: req.body.productname,Category:req.body.category,Description: req.body.description, Price: req.body.rate, Quantity: req.body.quantity, Image:req.body.fileimage})
    newProduct.save()
        .then(result => {
            console.log('successfully saved')
        })
})

admin.delete('/product/:id',async(req,res)=>{
   
     let data = await Product.findByIdAndDelete({_id:req.params.id})
     console.log('hey u did it')
     res.send(data)

})

admin.listen(4000,(err)=>console.log('running on 4000'))