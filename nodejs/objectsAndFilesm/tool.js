//process object
let commands = process.argv
//  console.log(typeof parseInt(commands[2]),commands[3])
// function GetSumOfwoNumbers(a,b){
//     return a+b
// }
// console.log(GetSumOfwoNumbers(parseInt(commands[2]),parseInt(commands[3])))

// let user= ['jane','jone','joe','janim','jan']
// function GetUser(name){
//     return user.filter(user=>user===name)
// }
// let result = GetUser(commands[2])
// console.log(result)

// require('dotenv').config()
// console.log(process.env.TOKEN) 

const link = commands[3]  //utube link
const fileName = commands[5]   //file format

// console.log(`--link ${link} --convert ${FileFormat}`)

const fs = require('fs');
const ytdl = require('ytdl-core');
ytdl(link)
  .pipe(fs.createWriteStream(fileName));