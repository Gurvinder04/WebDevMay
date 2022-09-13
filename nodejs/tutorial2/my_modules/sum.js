//export string data
// module.exports ="Hello World"

//export array data
// module.exports = [1,2,,3,4,5,6,7,8,9,10]
const fetch = require('node-fetch')
//export object data
//module.exports = {id:1, name:"john doe", age:25}

//export array of objects
// module.exports = {
//     users:['john doe', 'ridam','anvi'],
//     products:['apple', 'mango','anvi']
// }

//export function
// module.exports = function(a,b){
//     return a+b
// }

//export multiple function
module.exports = {
    getName:function(name){
        return name
    },
    getAge:function(age){
        return age
    },
    getTodos:async function(){
      let res = await fetch('https://jsonplaceholder.typicode.com/todos')
      let data = await res.json()
      return data
    }

}