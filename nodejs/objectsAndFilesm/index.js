const fs = require('fs'); //import module

//rename file
// fs.rename('notes.txt','notes.js',(err)=>{
//     // if(err) throw err;
//     console.log('file is renamed');
// })

//find files and rename them
// fs.readdir('./',(err,files)=>{
//     let filesNames = files.filter(file=>file.includes('12sd'))
//     console.log(filesNames)
//     let count = 1
//     filesNames.forEach((file,index)=>{
//         console.log(file)  //print the file

//         //rename the file
//         console.log(index,'before')
//         let newName = `tutorial-${index+1}.txt`
//         console.log(newName)
//        fs.rename(file,newName,(err)=>console.log('renamed'))
//     })
// })

//delete files
// fs.rm('company.txt',(err)=>{
//     console.log('file is deleted')
// })


//delete files using unlink method
// fs.unlink('tutorial-1.txt',(err)=>{
//     console.log('file is deleted')
// })

//delete a folder
// fs.rmdir('./test',(err)=>{
//     console.log('folder is deleted')
// })


//deleting subfolder in folder
// fs.rmdir('./test1',{
//     recursive:true,
//     force:true
// },(err)=>{
//     console.log('folder is deleted')
// })

//exist file
fs.exists('movies.txt',(err)=>{
   console.log(err?'file exist':'file doesnt exist')
// console.log(err)
})