//create json data and then run it on fake api server


//PUT - if we update only single thing than it will remove other data of object
//PATCH - it will update the thing u want to update and keep the rest same
const getbtn = document.getElementById('get')
const postbtn = document.getElementById('post')
const patchbtn = document.getElementById('updatepatch')
const putbtn = document.getElementById('updateput')
const deletebtn = document.getElementById('del')

//get request

getbtn.addEventListener('click',(e)=>{
    console.log('hello get')
    fetch('http://localhost:7000/api')
    .then(res=>res.json())   //call to data store in api
    .then(data=>{            //display the called data
        console.log(data);
    })
    e.preventDefault();      //prevent from refreshing

})

//put request
putbtn.addEventListener('click',(e)=>{
    console.log('hello post');
    fetch('http://localhost:7000/api/2',{
         method: 'PUT',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify({     //must be string data type that's why change the data with stringify
            "username":"joe dalton"  //it will update the username but delete the password
         })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request': ${data}`)
    }) 
    e.preventDefault();
})

patchbtn.addEventListener('click',(e)=>{
    fetch('http://localhost:7000/api/2',{
         method: 'PATCH',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify({     //must be string data type that's why change the data with stringify
            "password":"guru4566"  //it will update the username but delete the password
         })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PATCH request : ${data}`)
    })
    e.preventDefault()
})

//post request
postbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:7000/api',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({     //must be string data type that's why change the data with stringify
            "username":"ridam",
            "password":"ridu123"  //it will update the username but delete the password
         })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('POST request : ' ,data)
    })
})

deletebtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:7000/api/3',{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('DELETE: ' ,data)
    })
})