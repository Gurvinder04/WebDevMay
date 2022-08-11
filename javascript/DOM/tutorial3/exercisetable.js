/*<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
*/


const g = t=>document.createElement(t);
MakeCardComponent('https://picsum.photos/id/237/200/300','btn-warning','You can use a loop to calculate the distance the snail covers each day, and break the loop when it reaches the desired distance.','show','CARD')

const table = g('table')
table.className = "table"

const thead = g('thead')
const trOFThead = g('tr')

const thIndex = g('th')
thIndex.innerText = "#"
thIndex.setAttribute('scope','col')

const thFirst = g('th')
thFirst.innerText = "first"
thFirst.setAttribute('scope','col')

const thLast = g('th')
thLast.innerText = "last"
thLast.setAttribute('scope','col')

const thHandle = g('th')
thHandle.innerText = "handle"
thHandle.setAttribute('scope','col')

trOFThead.append(thIndex,thFirst,thLast,thHandle)  //place th in tr
thead.append(trOFThead)  //place tr in thead
table.append(thead)     //place thead in table

//tbody && tr1
const tbody = g('tbody')
const trOFTbody = g('tr')
const thOFTbody = g('th')
thOFTbody.setAttribute('scope','row')
thOFTbody.innerText = "1"

const td1 = g('td')
td1.innerText = "Mark"

const td2 = g('td')
td2.innerText = "Otto"

const td3 = g('td')
td3.innerText = "@mdo"

trOFTbody.append(thOFTbody,td1,td2,td3)
tbody.append(trOFTbody)
table.append(tbody)

//tr2

const tr2OFTbody = g('tr')
const th2OFTbody = g('th')
th2OFTbody.setAttribute('scope','row')
th2OFTbody.innerText = "2"

const td4 = g('td')
td4.innerText = "Jacob"

const td5 = g('td')
td5.innerText = "Thornton"

const td6 = g('td')
td6.innerText = "fat"

tr2OFTbody.append(th2OFTbody,td4,td5,td6)
tbody.append(tr2OFTbody)
table.append(tbody)


//tr3
const tr3OFTbody = g('tr')
const th3OFTbody = g('th')
th3OFTbody.setAttribute('scope','row')
th3OFTbody.innerText = "3"

const td7 = g('td')
td7.colSpan = "2"
td7.innerText = "Larry the bird"

const td8 = g('td')
td8.innerText = "@twitter"

tr3OFTbody.append(th3OFTbody,td7,td8)
tbody.append(tr3OFTbody)
table.append(tbody)
document.body.append(table)  //place table in body


//console.log(table,trOFTbody)


/*
<div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/200" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      */


      //function for dynamic 
      function MakeCardComponent(pic,btncolor,description,btnText,cardTitle){

      

      //div
      const cardContainer = g('div')
      cardContainer.className ="card"
      cardContainer.style.width = "18rem"
      cardContainer.style.boxShadow = "4px 4px 4px 4px grey"
      cardContainer.style.margin =" 10px"
      //div.setAttribute('style','with:18rem;')
       
      //img
      const image = g('img')
      //image.src ="https://picsum.photos/200"
      image.setAttribute('src',`${pic}`)
      image.className ="card-img-top"
      //image.classList.add('card-img-top')   another method of creating class
      image.setAttribute('alt','SORRY')

      //div
      const div2 = g('div')
      div2.className ="card-body"


      //h5
      const h = g('h5')
      h.className ="card-title"
      h.innerText = `${cardTitle}`

      //p
      const para =g('p')
      para.className = "card-text"
      para.innerText = `${description}`
    
      //a
      const a = g('a')
      a.classList.add('btn-primary')
      a.classList.add(btncolor != undefined ?btncolor :'btn-primary')
      a.innerText =`${btnText}`
      //a.setAttribute('href','#')
      a.href ="#"

      div2.append(h,para,a)
      cardContainer.append(image,div2)
      //document.body.append(div)

      return document.body.append(cardContainer)
      }
     
      /*
      //to make 2 card
      const cloneOfCardContainer = div.cloneNode(true)
      cloneOfCardContainer.children[1].children[0].innerText="Clone card"

      //changing class
      cloneOfCardContainer.children[1].lastChild.classList.remove('btn-primary')
      cloneOfCardContainer.children[1].lastChild.classList.add('btn-danger')
      
      document.body.append(cloneOfCardContainer)
      */

MakeCardComponent('https://picsum.photos/id/237/200/300','btn-warning','You can use a loop to calculate the distance the snail covers each day, and break the loop when it reaches the desired distance.','show','CARD')



document.querySelector('.remove').addEventListener('click',()=>{
    
})