//element generator
const g = t=>document.createElement(t);
const randomImage = g('img')
randomImage.src = 'https://picsum.photos/400'
randomImage.className = 'img-fluid'  //bootstrap prop to make responive img
randomImage.setAttribute('alt','Random image')  //if img doesnt load show the text

const container = g('div')
container.className = "container"
const row = g('div')
row.className = "row"
//column 1
const col1 = g('div')
const colText1 = document.createTextNode('col 1')
col1.appendChild(colText1)
col1.className = "col-md-4 bg-success p-5"
//column 2
const col2 = g('div')
col2.appendChild(randomImage)
col2.className = "col-md-4 bg-dark p-5"
//column 3
const col3 = g('div')
col3.className = "col-md-4 bg-warning p-5"

row.appendChild(col1)
row.appendChild(col2)
row.appendChild(col3)
container.append(row)
document.body.append(container)
console.log(container,row)