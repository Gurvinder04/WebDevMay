//array methods

var result;
var myArr=[];
var myNumbers =[5,21,4,55,6,33,7,89,54,7]
var myLetters =['g','u','r','v','i','n','d','e','r'];

//result=myArr;
//push
myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push({name:"john"})  //add in first place

//pop
myArr.pop() //last element is removed

//shift
myArr.shift()  //first added element is removed

//join
myArr = myArr.join("-")


//sort
result = myLetters.sort(); //alphabetical order
result =myNumbers.sort(function (a,b){   //numerical order
    return a-b  //givers increasing order and b-a gives decreasing order
})


//concat method
result = myNumbers.concat(myLetters);

//iteration methods{for,each,map,filter,reduce,every}
/*for(var i=0; i<result.length; i++){
    console.log(result[i]);
}*/

//result[4] //access array by index
//foreach
result.forEach(function(value,index,arrayitself){ //value lendi v item,index hund increase te arrayitself hunda v diplay
    console.log( value,index,arrayitself);

})

result.map(function(value,index,arrayitself){ //value lendi v item,index hund increase te arrayitself hunda v diplay
    console.log( value,index,arrayitself);

})

/*function NewForLoop(value,index,arrayitself){ //value lendi v item,index hund increase te arrayitself hunda v diplay
    console.log( value,index,arrayitself);

}
result.forEach(NewForLoop);*/   //just another way of calling it
 var sum=0;
/*for(var i=0; i<myNumbers.length; i++){
     sum+=myNumbers[i];
     console.log(sum);
}
console.log("The final sum is "+sum);*/
myNumbers.forEach((n)=>sum+=n);
result= `total sum is ${sum}`
//console.log(result);

/*var average;
var marks=[];
var input1 = prompt("enter english marks");
var input2 = prompt("enter english marks");
var input3 = prompt("enter english marks");
var input4 = prompt("enter english marks");

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


//filter data
result = myNumbers.filter(function(value){
    return value>=30
})

result=myNumbers.filter(m1)

console.log(result)


let posts =[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

result=myNumbers.filter(value=> value>=20)

/*result = posts.filter(value=>{
    return value.id === 4
})*/


function FindPostById(id){
    return 
}

result = FindPostById(5)
console.log(result)