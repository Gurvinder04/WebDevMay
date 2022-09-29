const express = require('express')
const cors = require('cors')
const multer = require('multer')

//create server
const practice = express();
//create middleware
practice.use(express.json())

//Multer
const store = multer.diskStorage({
    destination:(req,file,call)=>call(null,'./uploads'),
    // filename:(req,file,call)=>call(null,file.originalname)
    filename:(req,file,call)=>call(null,file.originalname)
})
const uploader = multer({storage:store})

//GET method
practice.get('/',(req,res)=>{
    res.json({
        message:'final view....'
    })
})
//Post method
practice.post('/',uploader.single('uploadFile'),(req,res)=>{
    console.log(req.file.path)
    res.json({
        message:'finally u did it'
    })
})
//listen port
practice.listen(7070,()=>console.log('I am running on 7070,dont u dare to stop me...'))