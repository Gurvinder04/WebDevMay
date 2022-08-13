const[companyName,description,price]=document.querySelectorAll('.form-control')
const addBtn = document.querySelector('.addbtn')
const result = document.querySelector('.result')
const card = document.querySelector('.card')

addBtn.addEventListener('click',(e)=>{
    e.preventDefault()
       const obj ={
        "Company":companyName.value,
        "Description":description.value,
        "Price":price.value
       }
       console.log(companyName.value)
       fetch('http://localhost:5000/Products',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(obj)
       })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
    })


        //DISPLAYING

    async function getProduct(){
        let response = await fetch(`http://localhost:5000/Products`)
        let data = await response.json()
        return data
    }


    function createCard(demo){
     const g =t=>document.createElement(t)
     /*
     <div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <strong>€</strong>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
    </div>
     */
 const div1 = g('div')
 div1.className = "card"
 div1.style.width ="23rem"

 const image =g('img')
 image.className="card-img-top"
 //image.style.height="15rem"
 image.src=demo.image
 image.setAttribute('alt','oops')

 const div2 = g('div')
 div2.className="card-body"

 const h5 =g('h5')
 h5.className="card-title"
 h5.innerHTML=demo.Company

 const p = g('p')
 p.className="card-text"
 p.innerHTML=demo.Description

const strong = g('strong')
strong.innerHTML= "€"+demo.Price
strong.style.fontStyle="italic"

 const a = g('a')
 a.href="#"
 a.className="btn btn-success"
 a.style.width="100%"
 a.innerHTML="Add to Wishlist"

div2.append(h5,p,strong,a)
div1.append(image)
div1.append(div2)
card.append(div1)
result.append(card)
document.body.append(document.querySelector('.container').append(result))
console.log(div1)
 }

 document.addEventListener('DOMContentLoaded',(e)=>{
    getProduct()
    .then(data=>{
        data.forEach(el => {
            createCard(el)
        });
    })
 })