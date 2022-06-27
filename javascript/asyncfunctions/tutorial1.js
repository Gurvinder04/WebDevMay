const posts = [{
    id:1,
    title:'call of duty',
    body: 'first post body'
},
{
    id:2,
    title:'call of duty1',
    body: 'second post body'
}
]

//get posts
/*function getLastGame(){
    console.log(posts)
}


function createPost(post){
    setTimeout(()=>{
        posts.push(post)
        
    },3000)
}

function createPost(post,Callback){
    setTimeout(()=>{
        posts.push(post)
        Callback()
    },3000)
}

createPost({
    id:3,
    title:"counyter strike offensive"
}),getLastGame()

getLastGame()*/


/*function keeper1(string,callback){
    callback(string)
}

function keeper2(string,callback){
    let newString = strin.toUpperCase();
    callback(newString)
}

function keeper3(string,callback){
    let arr = string.split("");
    callback(arr)
}
function keeper4(arr,index,callback){
    let getLetter =arr[index];
    callback(getLetter)
}
function printIt(letter){
    console.log(letter)
}

keeper1("HEllo friend",(string)=>{
    keeper2(string,(string)=>{
        keeper3(string,(arr)=>{
            keeper4(arr,2,(letter))
        })
    })
})*/


//ASYNCHRONUS

async function keeper1(string){
   return await string
}

function keeper2(string){
    let newString = string.toUpperCase();
    return newString
}

function keeper3(string){
    let arr = string.split("");
    return arr
}
function keeper4(arr,index){
    let getLetter =arr[index];
    return getLetter
}
function printIt(letter){
    console.log(letter)
}

keeper1('Hello friend')
.then(keeper2)
.then(keeper3)
.then(response=>keeper4(response,2))
.then(printIt)
.catch(err=>console.log(err))

console.log(keeper1('Hello friend'))  //it never crash ,wait for data(o/p=promise)

let promiseMe = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello,i will be there in 5 seconds')
    },3000)
})
let promiseMe2 = new Promise((resolve,reject)=>{
        resolve('hello,this is second promise')  
})

let getPromiseResult = Promise.all([promiseMe,promiseMe2])
console.log(getPromiseResult)

getPromiseResult
.then(response=>{
    console.log(response)
})




/*console.log(promiseMe)
promiseMe
.then(answer=>{
    console.log(answer)
})*/