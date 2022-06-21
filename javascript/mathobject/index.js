//math object
var result;

//pi number
result =Math.PI;

//round number
result = Math.round(2000.6)
result = Math.round(2000.5)
result = Math.round(2000.4)
result = Math.round(457.6)

//power method
result = Math.pow(2,6);

//square method
result = Math.sqrt(64)
//find max number
result = Math.max(44,78,23,77,85); // cannot pass array list directly to method
/*let numbers =[5,8,56,55,47,40,60,35]
result = Math.min(...number);  //by split method u can can well pass array */
//find min number
result = Math.min(44,78,23,77,85);
//absolute value method
result = Math.abs(-25); //always return +number
result = Math.abs(45);
//random method
result = Math.random();  //0 to 0.999999999999999999999
result = Math.round((Math.random()*10));

function GetRandomNumberRange(min,max){
    return Math.round(Math.random()*(max-min)+min)

}

result = GetRandomNumberRange(1,5);
console.log(result);

