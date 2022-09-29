//b4f2c0fe7e2d49ee853de1267bef7d14

const express = require('express')
const cors = require('cors')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express()

//use middleware
app.use(cors())
app.use(express.json())
//proxy server
app.use('/news',createProxyMiddleware({
    target:'https://newsapi.org/v2/top-headlines?country=us&apiKey=b4f2c0fe7e2d49ee853de1267bef7d14',
    pathRewrite:{['/news']:''},   //http://localhost:4000/news
    changeOrigin:true,
    secure:true
}))


app.listen(4000,()=>console.log('I am running....so dont u dare to stop me'))