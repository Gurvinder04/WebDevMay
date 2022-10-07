const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const server = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const { Alert } = require('react-bootstrap');
//middleware
server.use(express.json())
server.use(cors())

mongoose.connect('mongodb://localhost:27017/UserInfo', (err) => console.log('connected'))

const SignSchema = mongoose.Schema({
    Username: {
        type: String,
        unique: true
    },
    email: String,
    password: String
})

const User = mongoose.model('User', SignSchema)
const IsUserExist = (req, res, next) => {
    const { email, password } = req.body
    User.find({ email: email })
        .then(result => {
            console.log(result)
            if (result.length === 1) {
                let isPasscorrect = bcrypt.compareSync(password,result[0].password)
                if (isPasscorrect) {
                    console.log('user exist')
                }
                else {
                    console.log('Incorrect password')
                }

            }
            else {
                console.log('User doesnt exist')
            }
        })
}

server.post('/register', (req, res) => {
    //  console.log(req.body)
    const password =bcrypt.hashSync(req.body.password,10)
    const user_data = new User({ Username: req.body.name, email: req.body.email, password:password })
    user_data.save()
        .then(result => {
            console.log('successfully saved')
        })
})

server.post('/login', IsUserExist, (req, res) => {

})

// server.use(
//     '/rest',
//     createProxyMiddleware({
//         target: 'https://jsonplaceholder.typicode.com',
//         pathRewrite: { ['/rest']: '' },
//         changeOrigin: true,
//         secure: true
//     })
// );



server.listen(4000, () => console.log('u r running at 4000 port'))