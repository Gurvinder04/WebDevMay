// switch statement
var value = 1;
switch(value){
    case 1:
         console.log("value is 1")//do something else
        break; // if not use than show all case output
    case 2:
        console.log("value is 2")//do something
        break;
    default:
        console.log("value is not 1 and 2")//runs when doesnt see any match
        break;
}

var date = new Date();

console.log(date.getDay()); //1 refer to monday
switch(date.getDay()){
    case 1:
        console.log("Maandag");
        break;
    case 2:
        console.log("Dinsdag");
        break;
    case 3:
        console.log("woensdag");
        break;
     case 4:
         console.log("Donderdag");
        break;

}

const winner = "joe";
switch(winner){
    case "dave":
        console.log("dave is winner");
        break;
    default:
    console.log("no one is winner");
    break
}

let isLightOn = false;
const SwitchBtn = document.getElementById("switcher")

const LightController =  {
    lightOn:function(){
        console.log("light is on");
        isLightOn = true;
    },

    lightOff:function(){
        console.log("light is off");
        isLightOn = false;
    }
}


SwitchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("hello")

switch(isLightOn){
     case false:
        LightController.lightOn();
        break;
    case true:
        LightController.lightOff();
        break;
    default:
        console.log("something went wrong")
}
})


  //calculator
  
  function calculator(param){
    let result=0;
    var operation =param ;
    //var answer = document.getElementById("final");
    
    var n1 = parseInt(prompt("enter number"));
    var n2 = parseInt(prompt("enter number"));
    

    

    switch(operation){
        case "add":
             result = n1+n2;
            break;
        case "subtract":
            result = n1-n2;
            break;
        case "multiply":
            result = n1*n2;
            break;
        case "divide":
            result = n1/n2;
            break;
        default:
            console.log("please enter valid input");
            break;

    }
    document.getElementById("final").innerHTML = "Your Answer is " + result;
    console.log("Answer is:" +result);
  }