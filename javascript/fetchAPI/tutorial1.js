//fetching api

/*fetch('http://localhost:7000/api')
//.then(response=>response.json()) //.json coz accesing json data
          //OR
.then(response=>{
    setTimeout(()=>{
        console.log('hello')
    },2000)
    return response.json()
})
//promise chain method then()
.then(data=>{
    //for iteration through the data
    data.forEach(user => {
        console.log(user)
    });
})
//.then(data=>console.log(data))
.catch(err=>console.log(err))*/

/*fetch('http://localhost:7000/api')
.then(res=>res.json()) //access original data
.then(data=>data) //original data
.then(data=>{     //changing originl data
    data.map(user=>{
        user.username = user.username.toUpperCase()
    })
    return data   //return changed data
})
.then(data=>console.log(data))  //printing updated data*/

/*async function getUsers(){
    let response = await fetch('http://localhost:7000/api')
    return response.json()
}

getUsers()
.then(data=>{
    console.log(data)
})*/

//showing data on page by fetching from api
const TbodyResult = document.getElementById('result')
/*let getUsers = new Promise((resolve,reject)=>{
    fetch('http://localhost:7000/api')
    .then(res=>res.json())
    .then(data=>{
        resolve(data)
    })
    .catch(err=>reject(err))
})

getUsers
.then(data=>{
    data.forEach(user=>{
        TbodyResult.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>

    </tr>`
    })
})*/

const temp = [];
async function getUsers() {
    let fetchData = await fetch('https://jsonplaceholder.typicode.com/users')
    return fetchData.json()
}

getUsers()
    .then(data => {
        data.forEach(prop => {     //instead of for each u can use map also
          //  console.log(prop)
            const obj = {
                id: prop.id,
                fullname:prop.name,
                username:prop.username
            }
            temp.push(obj) 
                      
        })
        console.log(temp)
       return temp
    })


    .then(data=>{
        data.forEach(user=>{
            TbodyResult.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.fullname}</td>
            <td>${user.username}</td>
    
        </tr>`
        })
    })

    //step1 get all originl data
//step2 extract specific properties from user{id:1,......}
//step3 user.push({})
//step4 user

       //ANOTHER WAY OF FETCHING AND FILTERING
    /*getUsers()
    .then(data=>{
        return data.map(({id,name,username})=>({id,name,username}))
    })
    .then,(data=>{
        console.log(data)
    })*/
    

    //destructing array
    const TestData =['a','b','c','d','e']
    const[x,y,z]=TestData    //here x refer to a,y refe to b and so on....
    console.log(x,y,z)

    const my={
        id:1,
        name:'gurvinder',
        course:'web development',
    }
    const{id,name}=my  //while accessing obj use curly brackets
    console.log(id,name)

    fetch('dontreadme.txt')
    .then(res=>res.text())   //we wanna display txt file so use .text extension
    .then(data=>{
        console.log(data)
    })
    
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const sumbtn = document.getElementById('btn')

sumbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const num1 = number1.value
    const num2 = number2.value
    let result = eval(num1+num2)   //don't use eval its harmful
    console.log(result)
})
    




