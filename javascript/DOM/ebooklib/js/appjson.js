//const[bookName,bookAuthor,category,date,price] = document.querySelectorAll('input')

const bookName = document.querySelector('#book_name')
const bookAuthor = document.querySelector('#book_author')
const category = document.querySelector('#book_category')
const date = document.querySelector('#book_date')
const price = document.querySelector('#price')



const addBookbtn = document.querySelector('.addbookbtn')
var obj;
function book(){
    obj = {
        title:`${bookName.value}`,
        author:bookAuthor.value,
        category:category.value,
        date:date.value,
        price:price.value      
    }
    return obj
        
}

//http://localhost:5000/books
addBookbtn.addEventListener('click',(e)=>{
           book()
   console.log(bookName.value)
   fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{
                //'content-type':application/json
            },
            body:JSON.stringify(obj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
})
