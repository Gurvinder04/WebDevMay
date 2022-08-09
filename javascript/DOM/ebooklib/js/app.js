const addBookbtn = document.querySelector('.addbookbtn')
const bookName = document.querySelector('#book_name')
const bookAuthor = document.querySelector('#book_author')
const category = document.querySelector('#book_category')
const date = document.querySelector('#book_date')
const price = document.querySelector('#price')

const delItems = document.querySelectorAll('tr')

//addBookbtn.forEach(addBookbtn=>{

addBookbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(JSON.parse(localStorage.getItem('Bookrecords'))!== null){
        var newBook =JSON.parse(localStorage.getItem('Bookrecords'))
        let obj = new Book(bookName.value,bookAuthor.value,category.value,date.value,price.value)
        /*newBook.push(bookName.value)
        newBook.push(bookAuthor.value)
        newBook.push(category.value)
        newBook.push(date.value)
        newBook.push(price.value)*/
        console.log(obj)
        newBook.push(obj)
        localStorage.setItem('Bookrecords',JSON.stringify(newBook))
    }
    else{
        let Bookrecords = []
        let obj = new Book(bookName.value,bookAuthor.value,category.value,date.value,price.value)
        /*Bookrecords.push(bookName.value)
        Bookrecords.push(bookAuthor.value)
        Bookrecords.push(category.value)
        Bookrecords.push(date.value)
        Bookrecords.push(price.value)*/
        console.log(obj)
        Bookrecords.push(obj)
        localStorage.setItem('Bookrecords',JSON.stringify(Bookrecords))
       

    }

  
})
class Book{
    constructor(name,author,category,date,price){
      this.bookName= name;
      this.bookAuthor = author;
      this.category = category;
      this.date= date;
      this.price= price;
}
}
//})



for(i=0;i<delItems.length;i++){

    delItems[i].addEventListener('click', function(e){
        this.remove();
        e.preventDefault();
      });
}

