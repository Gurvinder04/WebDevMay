var result;

//document object
result = document;
result = document.all;
result = document.URL
result = document.links   //store links in html
//result = document.images
result = document.scripts
//result = document.forms
result = document.firstChild
result = document.body
result = document.body.firstElementChild.innerText
/*
result = document.body.firstElementChild.innerText ="<h4>hii</h4>"    check difference
result = document.body.firstElementChild.innerHTML ="<h4>hii</h4>"
*/  
result = document.body.firstElementChild.textContent="hello"



console.log(result)