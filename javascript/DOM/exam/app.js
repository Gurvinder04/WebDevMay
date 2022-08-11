//http://localhost:7000/TODO

const input = document.querySelector('#entry')
const addBtn= document.querySelector('.addbtn')
const output = document.querySelector('.out')
const delItems = document.querySelectorAll('li')

        //TO SEND THE DATA TO JSON
addBtn.addEventListener('click',()=>{
    const obj ={
        "title":input.value
    }
    console.log(input.value)
    fetch(' http://localhost:4000/todos',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
})



        //TO GET THE DATA FROM JSON
        async function getList() {
            let response = await fetch(`http://localhost:4000/todos`)
            let data = await response.json() // retrieve the data from the response
            return data
        }
        
        document.addEventListener('DOMContentLoaded',()=>{
            getList()
            .then(data=>{
                console.log(data,'DOMContentLoaded event')
                data.forEach(obj=>{
                    getTodo(obj)
                })
            })
        })

function getTodo(data){
    const li = document.createElement('li')
    li.style.color = "white"
    li.style.textDecorationLine="overline"
    li.style.textAlign="center"
    li.style.listStyle="none"
    
    li.innerHTML += `<li>"${input.value}"<i class="bi bi-trash3-fill"></i></li>`
    document.querySelector('.designUl').append(li);
    
}


for(i=0;i<delItems.length;i++){

    delItems[i].addEventListener('click', function(e){
        this.remove();
        e.preventDefault();
      });
}