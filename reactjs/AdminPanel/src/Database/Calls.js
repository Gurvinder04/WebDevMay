require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const join = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var cookie = require('cookie');
var cookieParser = require('cookie-parser')
const authorize = require('../Middleware/authorize')
const {User} = require('./Models')
const {Product} = require('./Models')
const{showProducts,showUser,productById,addProducts,adminSign,userSign,userLogin,userLogout,updateProducts,deleteProducts,addCart,getCart,deleteCart} = require('./Controller')
const admin = express()


//const upload = require('../../public/uploads')
//middleware
admin.use(express.json())
admin.use(cors({
    // origin: "http://localhost:4000",
    // credentials: true,
}))
admin.use(cookieParser())
//admin.use('/static',express.static('uploads'))
admin.use('http://localhost:3000/uploads',express.static(path.join(__dirname, '../../public')))
//admin.use('http://localhost:3000/uploads', express.static(path.join('public')))


const Storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null, '../../public/uploads'),
    filename:(req,file,cb)=>cb(null, file.originalname + "_" + Date.now() +path.extname(file.originalname))
})
const upload = multer({
   storage: Storage
})

admin.get('/product',showProducts)
admin.get('/product/:id',productById)
admin.get('/cart',authorize,getCart)
admin.get('/logout',authorize,userLogout)
admin.get('/users',showUser)

admin.post('/product',upload.single('fileimage'), addProducts)
admin.post('/sign',adminSign)
admin.post('/signin',userSign)
admin.post('/login',userLogin)
admin.post('/cart',addCart)

admin.patch('/product/:id',updateProducts)
admin.delete('/product/:id',deleteProducts)
admin.delete('/cart',deleteCart)

admin.listen(process.env.PORT,(err)=>console.log('running on 4000'))

