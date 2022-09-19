var url = require('url');

let parseUrl = url.parse('http://localhost:3000/?name=joe&age=20',true)
// console.log(parseUrl)
console.log(parseUrl.query)
console.log(parseUrl.query.name)
console.log(parseUrl.query.age)
console.log(parseUrl.hostname)

//__dirname
console.log(__dirname)  //it gives full path 
console.log(__filename) //give full path including u r filename

//path module
var path = require('path');
// const { fstat } = require('fs');
// console.log(path.basename(__dirname)) //basename return the last path of the directory
// console.log(path.basename(__filename)) //basename return the last path
// console.log(path.join('/company',__filename))
console.log(path.join('/company','tool.js'))
// writeFile(path.join(__dirname,'/tool.txt'),'hello',(err)=>{
//     console.log('file is created')
// })

console.log(path.join(__dirname,'/downloaded'))
console.log(path.win32)