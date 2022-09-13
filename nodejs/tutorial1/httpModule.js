const http = require('http')
const fetch = require('node-fetch')

//create server
http.createServer(function(req,res){
    console.log(req.url)
    res.writeHead(200,{'Content-Type':'text/html'})
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data =>{
        if(req.rawHeaders[3].includes('curl')){
            res.write(data.name + " sent from terminal ")
        }
        else{
            res.write(`<h1>${data.name}</h1>`)
        }
       
        res.end()
    })
    // res.write(`
    // <h1>Hello Node.js</h1>
    // <script>alert('helooo')</script>
    // <script>console.log('helooo kidaa')</script>
    // `)
   if(req.url == '/'){
    res.write("Hello world - Homepage")
    res.end()
   }
   else {
    res.write("Hello world - Loginpage")
    res.end()
   }
}).listen(7070,()=>{
    console.log('server is running......Port number is 7070')
}).on('connection',(socket)=>{       //print out a mesage when connection is made
    console.log('New Connection')
    socket.on('data',function(data){
        console.log(data.toString())
    })
})
   