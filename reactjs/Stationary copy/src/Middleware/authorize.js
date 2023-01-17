const jwt = require('jsonwebtoken')
const User = require('../Userdb')

const authorize = async(req,res,next)=>{
    try {
        const token = req.cookies.firstjwt
        const checkToken = jwt.verify(token,process.env.SECRET_KEY)
        console.log('checking token...',checkToken)
        next()
        
    } catch (error) {
        res.send(401).send(error)
        
    }
}

module.exports = authorize