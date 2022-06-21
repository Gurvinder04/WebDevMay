//do while
var i =0;
/*do{
      console.log("hello friend");  //do something
      i++;        //if we dont use this conditie than loop run infinite            
}while(i<=10);*/

/*do{
    console.log("hello friend");
}while(false); */ //it will execute only one time if it is false

/*do{
   var getRandomNumber = Math.floor(Math.random()*100)
   console.log(getRandomNumber);
   i++

}while(i<=10);*/

var number;
/*do{
  number = parseInt(prompt("enter a number between 1 and 10"));
  console.log(number);
}while(number<1  || number>10);*/

const rateLimitResult = document.getElementById("ratelimit");
const password = "12345"
let rateLimit = 3;   // 2 attempts left //1 attempt left //0 attempt left
/*do{
   number = prompt("enter your password");
   if(number  != password){
    console.log("wrong password");
    rateLimit--
    rateLimitResult.innerText = '${rateLimit} attempts left'
   }
   else{
      console.log("wrong password");
   }

}while(rateLimit<=0);*/

while(rateLimit){
    var userInput = prompt("enter your password")
    if(rateLimit == 0){
        break;
    }
    if(userInput != password){
        console.log("wrong password")
        rateLimit--
        rateLimitResult.innerText = '${rateLimit} attempts left'
    }
    else{
        console.log("correct password")
        break;
    }
}


var x=0;
var total=0;
/*while(x<10){
    x++
    total+=x;
    console.log('${x}+${total} = ${total}')

}*/
while(x<10){
    x++
    if(x%3 ==0){
        console.log(x)
        if(x >50){
            break;
        }
    }

}
