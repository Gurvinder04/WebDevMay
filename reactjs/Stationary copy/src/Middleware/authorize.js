const jwt = require('jsonwebtoken')
const User = require('../Database/ProductDB')


const authorize = async(req,res,next)=>{
    try {
        const token = req.cookies.firstjwt
        //console.log('authorize token is',token)
        const checkToken = jwt.verify(token,process.env.SECRET_KEY)
        console.log('checking token...',checkToken)
        let cid =checkToken._id
        const loggedUser= await User.find({_id:cid})
        console.log('token user detail',loggedUser)
        return cid
        next()
        
    } catch (error) {
        res.status(401).send(error)
        
    }
}

module.exports = authorize