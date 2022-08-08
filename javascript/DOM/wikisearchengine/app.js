const searchInput = document.querySelector('.searchInput')
const [wikiSearch,wikiSearchRandom] = document.querySelectorAll('button')  //u canalso select 1 by 1
const ResultsSection = document.querySelector('.results')

async function searchData(keyword,limit){
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data = await response.json()  //retreive the data from response
    return data
}

/*
<li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">title</div>
                   short description
                  </div>
                </li>


*/
/*const g = t =>document.createElement(t)
function HtmlTemplateGenerator(obj){
       const li = g('li')
       li.className = "list-group-item d-flex justify-content-between align-items-start"
       const parentDiv = g('div')
       parentDiv.className ="ms-2 me-auto"
       const textOfParentDiv = document.createTextNode(obj.snippet)


       const childDiv = g('div')
       childDiv.className = "fw-bold"
       const textOfChildDiv = document.createTextNode(obj.title)
       childDiv.append(textOfChildDiv)
       parentDiv.append(childDiv)
       parentDiv.append(textOfParentDiv)
       li.append(parentDiv)

      // return li
      return ResultsSection.append(li) //here u directly send the result list template to rsult section

}

wikiSearch.addEventListener('click',(e)=>{
    ResultsSection.innerHTML=""  //clear the result section
    //fetching data here by providing limit
    searchData(searchInput.value,30)
    .then(data=>{
        console.log(data.query.search)  //now we can seee onlyarray
        data.query.search.forEach(obj=>{ 
            HtmlTemplateGenerator(obj)
        })
    
    }).catch(err=>{
        console.log('no data found')
        ResultsSection.innerHTML= "Sorry ,no result found"
    })
    console.log('hello world',searchInput.value)
          e.preventDefault()
})
*/


  //Another program include html events,mouse events

  //mouseover
  ResultsSection.addEventListener('mouseover',(e)=>{
    console.log('mouse over event',e.target)   //for this uncommment the ol part of html but for prevous search engine comment it
    if(e.target.classList.contains('bg-dark')){
        e.target.classList.remove('bg-dark')
        e.target.classList.add('bg-danger')
    }
    e.target.classList.add('bg-danger')
})

//mouseout
  ResultsSection.addEventListener('mouseout',(e)=>{
    console.log('mouse out event',e.target)   //for this uncommment the ol part of html but for prevous search engine comment it
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')

})

//mousedown
ResultsSection.addEventListener('mousedown',(e)=>{
    console.log('mouse down event',e.target)   //for this click on the section
})

//mouseup
ResultsSection.addEventListener('mouseup',(e)=>{
    console.log('mouse up event',e.target)   //this work when u release the mouse clcicked button
})


//keyboard events

/*//keydown
searchInput.addEventListener('keydown',(e)=>{
     console.log('key down events',e.target)  //when press any key on keyboard it wil run
     console.log('key down events',e.key)     //shows which key u hav pressed
})*/

/*//keyup
searchInput.addEventListener('keyup',(e)=>{
    console.log('key up events',e.key)  //when press any key on keyboard it wil run
})*/

//keypress
searchInput.addEventListener('keypress',(e)=>{
    console.log('key press events',e.key)  //run for numbers,special character,character but not for control,fkeys
})

//event change
searchInput.addEventListener('change',(e)=>{
    console.log('change events',e.target.value)  //show the change event, type and press enter for result in console
})

//focus event
searchInput.addEventListener('focus',(e)=>{
    console.log('focus events',e.target.value)  //it will run when u focus on particular area,basssically click
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')
})

//blur event
searchInput.addEventListener('blur',(e)=>{
    console.log('blur events',e.target.value)  
    if(e.target.classList.contains('bg-dark')){
        e.target.classList.remove('bg-dark')
        e.target.classList.remove('text-light')
        e.target.classList.add('bg-light')
        e.target.classList.add('text-dark')
    }
})


document.addEventListener('DOMContentLoaded',()=>{
    searchData('javascript,20')
    .then(data=>{
        console.log(data,'DOMContentLoaded event')
    })
})