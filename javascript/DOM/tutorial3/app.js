const firstCol = document.querySelector('first')
const parentRowContainer = document.querySelector('.columns')


//const nextSibling = firstCol.nextElementSibling


//inserting
const g = t=>document.createElement(t)

//insertbefore
const divCol = g('div') //here we create a element with own generating function g
divCol.className = "col-md-3 bg-danger p-5"
divCol.innerText = "col"
const divCol2 = g('div')
divCol2.className = "col-md-3 bg-dark p-5"
divCol2.innerText = "col2"
/*parentRowContainer.insertBefore(divCol,parentRowContainer.lastElementChild)
parentRowContainer.insertAdjacentElement('afterbegin',divCol2)
parentRowContainer.insertAdjacentElement('afterend',divCol2)  //beforebegin,beforeend
*/
//append element
parentRowContainer.append(divCol)
parentRowContainer.append(divCol2)
