// find elements
const userInput = document.querySelector('.userinput')
const saveBtn = document.querySelector('.savebtn')
const getBtn = document.querySelector('.getbtn')

var user;
/*setTimeout(() => {
    user = prompt("enter your username")
    if (JSON.parse(localStorage.getItem('students')) !== null) {
        let temp = JSON.parse(localStorage.getItem('students'))
        temp.push(user)
        localStorage.setItem('students', JSON.stringify(temp))
    } else {
        let students = []
        students.push(user)
        localStorage.setItem('students', JSON.stringify(students))
    }
}, 3000)*/

/*setInterval(()=>{
    user = prompt('enter the username')
    console.log(user)
},3000)
*/


/*window.localStorage.setItem('record1','exist1')
window.localStorage.setItem('record2','exist2')
window.localStorage.setItem('record3','exist3')
window.localStorage.setItem('record4','exist4')
window.localStorage.removeItem('record4')
window.localStorage.clear()*/

/*saveBtn.addEventListener('click',()=>{
    console.log('hello world',userInput.value)
    localStorage.setItem('username',userInput.value)

})

getBtn.addEventListener('click',()=>{
    let username = localStorage.getItem('username')
    console.log(`username is ${username}`)
})*/


saveBtn.addEventListener('click', () => {
    if (JSON.parse(localStorage.getItem('students')) !== null) {
        let temp = JSON.parse(localStorage.getItem('students'))  //create a temp array
        temp.push(userInput.value) //push the value in the array
        //temp.push(user)
        localStorage.setItem('students', JSON.stringify(temp))  //set the value back to the storage
    }
    else {
        let students = []
        students.push(userInput.value)
        localStorage.setItem('students', JSON.stringify(students))
    }
})


getBtn.addEventListener('click', () => {
    let getnames = JSON.parse(localStorage.getItem('students'))
    console.log(getnames)
    //console.log(user)  // to print prompt value

    //window.open('https://www.w3schools.com/jsref/prop_win_innerwidth.asp','_blank','width=1000','height=1000')
})



