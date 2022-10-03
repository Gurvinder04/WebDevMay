const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const app = express();


mongoose.connect('mongodb://localhost:27017/CustomerData', (err) => console.log("connected"))


const RegisterSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

const Sign = mongoose.model('Sign', RegisterSchema)

app.use(express.json())

//IsUserExist middleware
const IsUserExist = (req, res, next) => {
    const { username, password } = req.body
    Sign.find({username: username})
        .then(result => {
            console.log(result.length)
            if (result.length ===0) {
                jwt.sign({ username }, 'specialkey', {
                    algorithm: 'HS256',
                    expiresIn: '60s'
                }, (err, token) => {
                    res.status(201).json({
                        payload: req.body,
                        token: token
                    })
                })
                next()
            }
            else {
                res.status(403).send('user is exist try log in ')


            }

        })
}

app.post('/register',IsUserExist, (req, res) => {
    const { username, password } = req.body
    const user = new Sign({ username, password })
    user.save()
        .then(result => {
            return true
        })
        .catch(err => {
            if (err) {
                res.status(403).send('try another username')
            }
        })
})

app.get('/login', (req, res) => {
    console.log('validated')

})



app.listen(7070, () => console.log('running on 7070'))