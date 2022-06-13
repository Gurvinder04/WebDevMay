var number=1; //global scope variable
const inputvalue = document.getElementById("username")


function ClickHandler(event){
    //event.preventDefault()
    //var number=1; //local scope variable
    number++
    console.log("clicked the button",number)
}

function InputHandler(event){
    console.log('hello',inputvalue.value)

}

inputvalue.addEventListener("change",InputHandler)

const RegisterBtn = document.getElementById("register") //addeventlistener.this is 2 method of onclick

 function RegisterClickHandler(event){
    console.log("register button clicked",inputvalue.value)
 }
 RegisterBtn.addEventListener("click",RegisterClickHandler)
//RegisterBtn.addEventListener("click",function(event){
     //console.log("register button clicked",inputvalue.value)  you can separately declare function or declare it in time of using
//})