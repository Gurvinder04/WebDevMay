
const express = require('express')
const cors = require('cors')
const multer = require('multer')

//server
const server = express();

//use middlewares
server.use(cors())
server.use(express.json())
server.use('/uploads',express.static('./uploads'))

server.get('/',(req,res)=>{
    res.json({
        message:'welcome to resful api'
    })
})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'./uploads'),
    filename:(req,file,cb)=>cb(null,file.originalname)
})
const uploader = multer({
    storage,
    fileFilter:(req,file,callback)=>{
        const extensions =['image/png','image/jpeg','image/jpg']
        if(extensions.includes(file.mimetype)){
            callback(null,true)
        }
        else{
            callback(new Error("Not Allowed!!!!!"))
        }
    }
})

server.post('/',uploader.single('document'),(request,response)=>{  //here document is the name which u give to the inputvalue in the form
    console.log(request.file.path) //display file location
    response.json({
         msg:'ok'
    })
})




//port number
server.listen(4000,()=>console.log('server is running on 8080'))