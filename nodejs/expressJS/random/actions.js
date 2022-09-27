const express = require('express')
const app = express()
const ProductModel = require('./schema.js')

app.use(express())

app.get('/',getProduct)
app.post('/product',addProduct)
app.put('/product/:id',updateProduct)
app.delete('/product/:id',deleteProduct)
app.all('*',invalid)