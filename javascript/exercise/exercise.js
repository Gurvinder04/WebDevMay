 
 //const result = document.getElementById("result");
 //var userinput = prompt("enter the value");
 //let input = parseInt(userinput);
 //console.log(typeof userinput);

 //result.innerText="your number is 10"

 /*if(Number.isInteger(input)){
     let x = document.getElementById("number");
     document.getElementById("number").innerHTML ="YOU HAVE ENTERED A NUMBER";

     console.log("you are correct " + input);
    
 }
 else{
    document.getElementById("notnumber").innerHTML="YOU HAVE  NOT 4ENTERED A NUMBER";
    window.alert("you are incorrect");
 }*/4

//calculator
 /*var number1 = prompt("enter the first number");
 var number2 = prompt("enter the second number");

 var n1 = parseInt(number1);
 var n2 = parseInt(number2);

 if(Number.isInteger(n1,n2)){
     let s= n1+n2;
    document.getElementById("sum").innerHTML;
    
    console.log("sum is " +s);
 }
 else{
    window.alert("Please entered valid inputs");
 }*/
/*var sum =0;
 var average =0;
var marks=[];
var input1 = prompt("enter english1 marks");
var input2 = prompt("enter english2 marks");
var input3 = prompt("enter english3 marks");
var input4 = prompt("enter english4 marks");

var m1 = parseInt(input1);
var m2 = parseInt(input2);
var m3 = parseInt(input3);
var m4 = parseInt(input4);

marks.push(m1);
marks.push(m2);
marks.push(m3);
marks.push(m4);
let l=marks.length;
for(var i=0; i<l; i++){
    console.log("Entered marks is "+marks[i]);
     sum+=marks[i];
     average = sum/l;
    
}
console.log("The sum is "+sum);
console.log("The avearge is "+average);*/

var sum =0;
 var average =0;
var marks=[];
var students = prompt("enter number of students appeared in exam");
var s1 = parseInt(students);
for(var i=0; i<s1; i++){
    var input = prompt("enter marks");
<<<<<<< HEAD
    if(input!=" "){
        var convert = parseInt(input);
        marks.push(convert)   
    }
    else{
        marks.push(0);
    }
=======
    if(input==undefined) {
        marks.push(0) ;
    }
    else{
        var convert = parseInt(input);
        marks.push(convert) 
    }  
>>>>>>> c67501576fea15443426b78c03c8d28b73b9f03d
}

for(var i=0; i<s1; i++){
    console.log("Entered marks is "+marks[i]);
     sum+=marks[i];
     average = sum/s1;
    
}
console.log("The sum is "+sum);
console.log("The avearge is "+average);