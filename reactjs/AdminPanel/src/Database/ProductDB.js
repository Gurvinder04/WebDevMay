const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const admin = express()
//middleware
admin.use(express.json())
admin.use(cors())
admin.use(express.static(__dirname+"../uploads/"))



//mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary
//mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/<Stationary>?retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'))
mongoose.connect('mongodb://localhost:27017/CustomerData',(err)=>console.log('connected....'))
const ProductSchema = mongoose.Schema({
    productname:String,
    category:String,
    description:String,
    price:String,
    quantity:String,
    image:String,
    feature:Boolean
})


const Product = mongoose.model('Product',ProductSchema)

//storage
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null, '../uploads/'),
    filename:(req,file,cb)=>cb(null,file.originalname)
})  //+ "_" + Date.now() +path.extname(file.originalname)
const upload = multer({
   storage: Storage
    // fileFilter:(req,file,callback)=>{
    //     const extensions =['image/png','image/jpeg','image/jpg','image/webp']
    //     if(extensions.includes(file.mimetype)){
    //         callback(null,true)
    //         console.log('added image')
    //     }
    //     else{
    //         callback(new Error("Not Allowed!!!!!"))
    //     }
    // }
})

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

admin.get('/products/:category',async(req,res)=>{
    console.log('with category')
    const cid = req.params.category
   const data = await Product.find({Category:cid})
   console.log('db ala data',data)
    res.send(data)
    
})

admin.post('/product', upload.single('fileimage'),(req,res)=>{
    //console.log(req.body.file,'sucesssssssss')
    const newProduct = new Product({ productname: req.body.productname,category:req.body.category,description: req.body.description, price: req.body.rate, quantity: req.body.quantity, image:req.file.filename,feature: req.body.feature})
    // req.files[0].paths
    newProduct.save()
        .then(result => {
            console.log('successfully saved')
        })
})




admin.patch('/product/:id',async(req,res)=>{
      const uid = req.params.id  
      const changes = req.body
      let data = await Product.findByIdAndUpdate(uid,changes,{new:true}) 
      res.send(data)
})


admin.delete('/product/:id',async(req,res)=>{
   console.log('deleting processss')
     let data = await Product.findByIdAndDelete({_id:req.params.id})
     console.log('hey u did it')
     res.send(data)

})

admin.listen(4000,(err)=>console.log('running on 4000'))