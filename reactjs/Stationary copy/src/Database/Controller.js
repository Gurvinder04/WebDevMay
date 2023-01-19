require('dotenv').config()
const {Product} = require('./Models')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var cookie = require('cookie');
var cookieParser = require('cookie-parser')
const authorize = require('../Middleware/authorize')

module.exports = {
    showProducts: async function (res, req) {
        console.log('showing products')
        const data = await Product.find()
        res.send(data)
    },

    productById: async function (res, req) {
        //console.log('with id')
        const rid = req.params.id
        const data = await Product.findById({ _id: rid })
        //console.log(data)
        res.send(data)
    },

    addProducts: async function (res, req) {
        console.log(req.body.file, 'sucesssssssss')
        const newProduct = new Product({ ProductName: req.body.productname, Category: req.body.category, Description: req.body.description, Price: req.body.rate, Quantity: req.body.quantity, Image: req.file.filename })
        newProduct.save()
            .then(result => {
                console.log('successfully saved')
            })
    },

    adminSign: async function (res, req) {
        console.log('entered Admin panel login')
        const { email, password } = req.body
        console.log(email, password)
        User.findOne({ Email: email })
            .then(user => {
                //console.log(result)
                if (user.length > 0) {
                    console.log(user)
                }
                else {
                    res.json({
                        msg: 'username or password incorrect'
                    })
                }
            })

    },

    userSign: async function (res, req) {
        console.log('entered')
        const password = bcrypt.hashSync(req.body.password,10)
        console.log(req.body)
        const user_data = new User({
           firstname: req.body.firstname,
           lastname: req.body.lastname, 
           email: req.body.email, 
           password:password,
           })
          let tokens =jwt.sign({_id:this._id},process.env.SECRET_KEY)
           res.cookie("firstjwt",tokens,{
            // domain: "localhost",
            // path: "/",
            httpOnly: true
           });
           console.log('userdb toke is',tokens)
        user_data.save()
              .then(result => {
                  console.log('successfully saved')
              })
    },

    userLogin: async function (res, req) {
        console.log('entered login')
        const { email, password } = req.body
        console.log(email, password)
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    console.log('user is', user)
                    let tokens = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
                    res.cookie("firstjwt", tokens, {
                        expires: new Date(Date.now() + 50000),
                        // domain: "localhost",
                        // path: "/",
                        httpOnly: true
                    });
                    console.log('user logintoken is', tokens)
                    //console.log(`this is checking cookie ${req.cookies.firstjwt}`)
                    res.status(201).send(user)
                }
                else {
                    console.log('login else part running')
                    console.log(user)
                    res.status(404).send(user)
                }
            })
    },

    updateProducts: async function (res, req) {
        const uid = req.params.id
        let data = Product.findById(uid)
        res.send(data)
    },

    deleteProducts: async function (res, req) {
        console.log('deleting processss')
        let data = await Product.findByIdAndDelete({ _id: req.params.id })
        console.log('hey u did it')
        res.send(data)

    }


}
