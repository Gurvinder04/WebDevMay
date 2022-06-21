var score =0;

function shakeIt(){
    var number1 = GetRandomNumberRange();
    var number2 = GetRandomNumberRange();
   
    if(number1==number2){
        score++;
        //document.getElementById("win").innerHTML = "you won";
        final.innerText = "you won";
        document.getElementById("number1").innerHTML = "number 1: " + number1;
        document.getElementById("number2").innerHTML = "number 2: " + number2;
        document.getElementById("score").innerHTML = "Score: " + score;
        console.log("number1:"+number1 + " "+"number2:" +number2);
        console.log("score is:" +score);
    }
    
    else{
        //document.getElementById("loss").innerHTML = "you loss";
        final.innerText = "you loss";
        //window.alert("shake it again");
    }
}

function GetRandomNumberRange(){
    return Math.round(Math.random()*6 +1)

}
 