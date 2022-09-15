 //import fs module
 const fs = require('fs');  //fs is core module
  
 //read file
 fs.readFile('./test.txt','utf8',(err,data)=>{
    // console.log(typeof data)
    // console.log(data.split(",")[0])  //spliting the data with comma and turning it into array
    // data.split(",").forEach(name=>console.log(name))
    // console.log(data)
 })

 //read directory
//  fs.readdir('./',(err,data)=>{
//     console.log(data)
//     let dirList =data.filter(file=>file.includes('doc'))
//     console.log(dirList)
//  })

//read two files with same extension
// fs.readdir('./',(err,data)=>{
//     console.log(data)
//     let txtFiles =data.filter(file=>file.includes('txt'))
//     console.log(txtFiles)
//     // fs.readFile(txtFiles[0],'utf8',(err,data)=>{
//     //     console.log(data)
//     // })
//     txtFiles.forEach(txt=>{
//     //    console.log(txt)
//        fs.readFile(txt,'utf8',(err,data)=>{
//         console.log(data,txt)
//        })
        
//     })
//  })

function ReadFiles(ext){
    fs.readdir('./',(err,data)=>{
            let txtFiles =data.filter(file=>file.includes(ext))
            txtFiles.forEach(txt=>{
               fs.readFile(txt,'utf8',(err,data)=>{
                console.log(data,txt)
               })
                
            })
         })
}

// ReadFiles('.doc')  //readfiles with passed extension

//WRITE FILE
// fs.writeFile('readme.txt','Hello Gurvinder Welcome to Node js.',(err)=>{
//     console.log('File is created')
//     // fs.readFile('readme.txt','utf8',(err,data)=>{
//     //     console.log(data)
//     // })
// })

// fs.writeFile('./public/readme.txt','Hii readme file',(err)=>{
//     console.log('file in folder created')
//     if(err) throw console.log(err)
// })  //doesn't create the file


//APPPEND FILE
// fs.appendFile('readme.txt','U r doing great',(err)=>{
//     console.log('File is appended')
// })

// fs.appendFile('users.json','5',(err)=>{
//     console.log('json file is appended')
// })

// fs.readFile('users.json','utf8',(err,data)=>{
//     let users = JSON.parse(data)  //to display json data
//     // console.log(users,"before")
//     // users.push(5)
//     // console.log(users,"after")
//     fs.writeFile('users.json',JSON.stringify(users),(err)=>{   //this 'll update the file means it write 5 in json file
//         console.log('json file is updated')
//     })
// })

// function AppendJsonFile(filename,newvalue){
//      fs.readFile(filename,'utf8',(err,data)=>{
//         if(data ===undefined){
//             fs.writeFile(filename,'[]',(err)=>console.log('file is created'))  //creates file if doesnt exixt
//         }
//         console.log(data)
//         // let newusers = JSON.parse(data)
//         // newusers.push(newvalue)
//         // fs.writeFile(filename,JSON.stringify(newusers),(err)=>{
//         //     console.log('new user is added')
//         // })
       
//      })
// }


// AppendJsonFile('posts.json','1')

const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    if (req.url == '/'){
        // res.write('<h1>u r in homepage</h1>')
       fs.readFile('index.html','utf8',(err,homepage)=>{
        res.write(homepage)
           console.log(homepage)
       })
    }
    else if(req.url == '/login'){
        // res.write('<h1>u r logged in</h1>')
        fs.readFile('login.html','utf8',(err,login)=>{
            res.write(login)
               console.log(login)
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        fs.readFile('test.jpg',(err,data)=>{
            res.write(data)
               console.log(data)
        })
    }
   
})
server.listen(7070,()=>console.log('server is running......'))