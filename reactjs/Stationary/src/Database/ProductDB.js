const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const admin = express()
//middleware
admin.use(express.json())
admin.use(cors())
// admin.use(express.static(__dirname+"./public/"))
mongoose.connect('mongodb+srv://root:190430@cluster0.4aeqend.mongodb.net/Stationary',(err)=>console.log('connected....'))

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

const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
const User = mongoose.model('User',StatUser)

//storage
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null, './public/uploads/'),
    filename:(req,file,cb)=>cb(null, file.originalname + "_" + Date.now() +path.extname(file.originalname))
})
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
    //console.log('with id')
    const rid = req.params.id
   const data = await Product.findById({_id:rid})
   //console.log(data)
    res.send(data)
    
})

admin.get('product/product/:id',async(req,res)=>{
    //console.log('with id')
    const rid = req.params.id
   const data = await Product.findById({_id:rid})
   //console.log(data)
    res.send(data)
    
})

// admin.get('/detail/:cat',async(req,res)=>{
//     console.log('with category')
//     const search = req.params.cat
//    const data = await Product.find({category:search})
//    console.log(data)
//     res.send(data)
    
// })
admin.post('/product',upload.single('fileimage'),(req,res)=>{
    
    console.log(req.body.file,'sucesssssssss')
    const newProduct = new Product({ ProductName: req.body.productname,Category:req.body.category,Description: req.body.description, Price: req.body.rate, Quantity: req.body.quantity,Image:req.file.filename})
    newProduct.save()
        .then(result => {
            console.log('successfully saved')
        })
})

admin.post('/sign',(req, res) => {
    console.log('entered login')
     const {email,password} = req.body
     console.log(email,password)
      User.findOne({Email:email})
      .then(user=>{
       //console.log(result)
       if(user.length >0){
         console.log(user)
        //  const loggedpass = user[0].user.password
         //console.log(loggedpass)
      //    const isPasscorrect =  bcrypt.compareSync(password,loggedpass)
      //    if(isPasscorrect){
      //     res.json({msg:'password is correct'})
      // }else{
      //     res.json({msg:' password is incorrect'})
      // }   
       }
       else{
        res.json({
            msg:'username or password incorrect'
        })
    }
       })
     
    })
  


admin.patch('/product/:id',(req,res)=>{
      const uid = req.params.id
    
      let data = Product.findById(uid)
      res.send(data)

})


admin.delete('/product/:id',async(req,res)=>{
   console.log('deleting processss')
     let data = await Product.findByIdAndDelete({_id:req.params.id})
     console.log('hey u did it')
     res.send(data)

})

admin.listen(4000,(err)=>console.log('running on 4000'))