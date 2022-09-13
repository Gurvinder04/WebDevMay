console.log('Hello Node js')

//import a module
const fetch = require('node-fetch')
var a = 5;
var b= 10;
console.log(`sum of numbers is ${a+b} `)

const myArr =['a','b','c','d','e',0,1,,2,3,4,5,6,7,8,9]
myArr.forEach(element=>{
    console.log(element)
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))