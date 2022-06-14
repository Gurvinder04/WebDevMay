//number methods
var result;
var n1 = "10";
var n2 = 10;
const PI = 3.141592653589793238;
var n3 = "10.5";
var n4 = "10 15 20";
var n5 = "10,15,20";
var n6 = "9e+2";
var n7 = 10e+2;  //scientific number
var n8 = 2000.54;

//tostring
result = n2.toString(); //return string representation

//parseInt
result = parseInt(n1); //return integer representation
result = parseInt("10")+parseInt("10");

//parseFloat
result = parseFloat(n3);  //return float representation

//toExponential
result = PI.toExponential(); //return exponential representation
result = PI.toExponential(2); //upto which digit

//toFixed
result = n8.toFixed(); // it will return 2001 bcoz no is above 2000
result = PI.toExponential(1); //upto

result = Number("10");
result = Number(undefined);
result = Number(null);
result = Number(true);

result = Number.MAX_VALUE;  //return max no in javascript
result = Number.MIN_VALUE;
result = Number.MAX_SAFE_INTEGER;
result = Number.POSITIVE_INFINITY;
result = Number.NaN;
result = Number.isFinite(10);
result = Number.isInteger("10");
result = Number.isNaN((10/10)-1);
result = Number.isSafeInteger(10);

/*var user = "gurvinder"
if(Number.isNaN(user)){
    console.log("valid");
}
else{
    console.log("Invalid");
}*/

console.log(result, typeof result );

