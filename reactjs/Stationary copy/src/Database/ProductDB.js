require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var cookie = require('cookie');
var cookieParser = require('cookie-parser')
const authorize = require('../Middleware/authorize')
const { stringify } = require('querystring')


const admin = express()
//middleware
admin.use(express.json())
admin.use(cors())
admin.use(cookieParser())
// admin.use(express.static(__dirname+"./public/"))

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



const StatUser =mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    usercart:{
        type:Array
    }
})
const User = mongoose.model('User',StatUser)
 
console.log(process.env.SECRET_KEY)
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
admin.get('/hidden',authorize,async(req,res)=>{
    //  if(error){
    //  console.log('getting error')
    // }
    // else{
    //  console.log('I m Fine')
    // }
    
    let uid = req.body._id
    console.log('hiddden checktoken is' ,uid)  
      User.findOne({_id:uid})
      .then(um=>{
        console.log('token user detail',um)
        if(um){
            res.status(200).send(JSON.stringify(um))
        }
        else{
            res.status(400).send(error)
        }
      })
     
})
//  admin.get('/',authorize,async(res,req)=>{
//     let uid = req.body._id
//     console.log('hiddden checktoken is' ,uid)  
//       User.findOne({_id:uid})
//       .then(um=>{
//         console.log('token user detail',um)
//         if(um){
//             res.status(200).send(JSON.stringify(um))
//         }
//         else{
//             res.status(400).send(JSON.stringify(error))
//         }
//       })
     
//  })
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

admin.post('/signin',(req,res)=>{
    console.log('entered')
    const password = bcrypt.hashSync(req.body.password,10)
    console.log(req.body)
    const user_data = new User({
       firstname: req.body.firstname,
       lastname: req.body.lastname, 
       email: req.body.email, 
       password:password,
    //  tokens : jwt.sign({_id:this._id},process.env.SECRET_KEY)   normal
       })
      //let tokens =jwt.sign({_id:this._id},process.env.SECRET_KEY)  //abnormal
       //user_data.tokens=user_data.tokens.concat({token:tokens})     //abnormal
      
      //  res.cookie("firstjwt",tokens,{       //no
      //   httpOnly: true                      //no
      //  });                                  //no
      //  console.log('userdb toke is',tokens) //no
    user_data.save()
          .then(result => {
              console.log('successfully saved')
          })
          //res.status(200).send(JSON.stringify(tokens))
  })
  
  
  
  
  admin.post('/login',(req, res) => {
    console.log('entered login')
     const {email,password} = req.body
     console.log(email,password)
      User.findOne({email:email})
      .then(user=>{
        if(user){     //abnormal 1
       console.log('user is',user)
     let tokens = jwt.sign({_id:user._id},process.env.SECRET_KEY) //normal
     
    
     //User.localStorage.setItem('trytoken',tokens)
     //let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)  //abnormal
       //user.tokens=token.concat({token:token})     //abnormal
       
      res.cookie("firstjwt",tokens,{
        expires:new Date(Date.now() + 30000),
        // domain: "localhost",
        // path: "/",
        httpOnly: true
       });
       console.log('user logintoken is',tokens)
       //console.log(`this is checking cookie ${req.cookies.firstjwt}`)
       res.status(201).send(JSON.stringify(user))
      //  if(user.length >0){
      //    console.log(user)
      //    const loggedpass = user[0].user.password
      //    console.log('token verified')
      //    const isPasscorrect =  bcrypt.compareSync(password,loggedpass)
      //    if(isPasscorrect){
      //     res.json({msg:'password is correct'})
      // }else{
      //     res.json({msg:' password is incorrect'})
      // }   
       //}
    //    else{
    //     res.json({
    //         msg:'username or password incorrect'
    //     })
    // }
      }
          else{                                     //abnormal 1
            console.log('login else part running')   //abnormal 1
            console.log(user)                         //abnormal 1
            res.status(404).send(user)                //abnormal 1
          }                                           //abnormal 1
       })                                              
       
  })


//   admin.post('/cart',(res,req)=>{
//          const product= req.body
//          console.log('database vala',product, typeof product, req.body)
//          User.findByIdAndUpdate('63ce47c390f3ff85f11f3c23',{
//             usercart:product
//          })
//          .then(res=>{
//              console.log('cart API',res)
//          })
        
//   })
// admin.post('/cart',(req,res)=>{
//    // const {description} = req.body.description
//     User.findByIdAndUpdate('63ce47c390f3ff85f11f3c23',{usercart:req.body})
//     .then(output=>{
//         res.json({
//             msg:"ok",
//             data:output
//         })
//     })
   
// })

admin.post('/cart',authorize,(req,res)=>{
            User.updateOne({_id:'63ce47c390f3ff85f11f3c23'},{$push:{ usercart:req.body}})
            .then(output=>{
                res.json({
                    msg:"ok",
                    data:output
                })
            })
        })


        admin.get('/cart',async(req,res)=>{
            let thik={}
            User.findById('63ce47c390f3ff85f11f3c23')
            .then(output=>{
                console.log('testing',output)
                res.send(JSON.stringify(output))
               
            }) 
        })

    admin.delete('/cart/:id',async(req,res)=>{
          let {id} = req.params
        console.log('deleting processss',id)
        let data = User.updateOne({ _id:'63ce47c390f3ff85f11f3c23'},
            { $pull: { 'usercart': { _id: '63ce47c390f3ff85f11f3c23' } } }
          );
        console.log('hey u did it',data)
        //res.send(JSON.stringify(data))
    })

admin.listen(4000,(err)=>console.log('running on 4000'))
module.exports = User