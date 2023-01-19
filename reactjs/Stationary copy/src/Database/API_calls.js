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
const{showProducts,productById,addProducts,adminSign,userSign,userLogin,updateProducts,deleteProducts} = require('./Controller')
const admin = express()
//middleware
admin.use(express.json())
admin.use(cors())
admin.use(cookieParser())
// admin.use(express.static(__dirname+"./public/"))

mongoose.connect(process.env.MONGO_URI,(err)=>console.log('connected....'))


const Storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null, './public/uploads/'),
    filename:(req,file,cb)=>cb(null, file.originalname + "_" + Date.now() +path.extname(file.originalname))
})
const upload = multer({
   storage: Storage
})

admin.get('/product',showProducts)
admin.get('/product/:id',productById)

admin.post('/product',upload.single('fileimage'), addProducts)
admin.post('/sign',adminSign)
admin.post('/signin',userSign)
admin.post('/login',userLogin)

admin.patch('/product/:id',updateProducts)
admin.delete('/product/:id',deleteProducts)

admin.listen(process.env.PORT,(err)=>console.log('running on 4000'))

