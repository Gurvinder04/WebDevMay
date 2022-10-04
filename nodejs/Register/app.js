const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const app = express();


mongoose.connect('mongodb://localhost:27017/CustomerData', (err) => console.log("connected"))


const RegisterSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type:String,
        min: [6],

    }
})

const Sign = mongoose.model('Sign', RegisterSchema)

app.use(express.json())

//IsUserExist middleware
const IsUserExist = (req, res, next) => {
    // const { username, password } = req.body
    Sign.find({username: username})
        .then(result => {
            console.log(result)
            if (result.length ===1) {
                let isPasscorrect = bcrypt.compareSync(password,result[0].password)
                if(isPasscorrect){
                    jwt.sign({ username }, 'specialkey', {
                        algorithm: 'HS256',
                        expiresIn: '60s'
                    }, (err, token) => {
                        res.status(201).json({
                           message: 'You r logged In',
                            token: token
                        })
                    })
                    next()
                }
                else{
                    // res.status(403).send('incorrect password ')
                    res.json({
                        msg:'password incorrect'
                    })
                }
                
            }
            else {
                res.status(403).send('You dont have account yet,please SignUp')


            }

        })
}

app.post('/register', (req, res) => {
    // const { username, password } = req.body
    const password =bcrypt.hashSync(req.body.password,10)  //pass is encyrpted here we use hashsync instead of hash bcoz with hash u have to complete promise chain but with hashsync not
    const user = new Sign({ 
        username:req.body.username, 
        password:password
    })
    user.save()
        .then(result => {
            // return true
            res.json({
                message:'user created',
                data:result
            })
        })
        .catch(err => {
            if (err) {
                res.status(403).send('try another username')
            }
        })
})

app.post('/login',IsUserExist, (req, res) => {
    console.log('validated')

})

app.get('/data',(req,res)=>{
   
    console.log('here is all user')
})


app.listen(7070, () => console.log('running on 7070'))