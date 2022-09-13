

//custom modules
const {getName,getAge,getTodos} = require('./my_modules/sum')
const {getSum,getDiff,getMultiply,getDivide} = require('./my_modules/calculator')
const Url = require('url')
const { url } = require('inspector')
const { Console } = require('console')

//get result of SumModule
// console.log(getName('john doe'))
// console.log(getAge(25))

// getTodos()
// .then(data=>{
//     console.log(data)
// })

console.log(getSum(4,5))
console.log(getDiff(4,5))
console.log(getMultiply(4,5))
console.log(getDivide(4,5))

           //URL MODULE
// console.log(Url.parse("https://www.w3schools.com/nodejs/default.asp"));
var q = Url.parse("http://localhost:8080/default.htm?year=2017&month=february")
console.log(q)

          //DELETING PROPERTY FROM OBJECT
 var user = {
     first_name: "John",
     last_name: "Smith",
     age: "38",
     department: "Software"
 };

 console.log(user)
 delete user.last_name
 console.log(user)
 console.log(Object.keys(user).length)