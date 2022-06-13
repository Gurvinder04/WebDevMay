//string methods

const MyText = 'lorem ipsum dolor ipsum sit amet';

//length
result = MyText.length;
result = MyText[MyText.length-1] //it will return last letter

//charAt()

result = MyText.charAt(6);

//concat()
var firstname = "john"
var lastname = "doe"

result = firstname.concat(lastname);
result = "1263".concat("154783");

//startwidth and endswith

result = MyText.endsWith("intec");
result = MyText.endsWith("amet");  //true or false
result = MyText.startsWith("lorem");
result = MyText.startsWith("brussel");

//include method

result = MyText.includes("ipsum");  //if word exist at any place in the paragraph than include find it

//indexof method
result = MyText.indexOf("ipsum");  //it will give first index of word

//replace method
result = MyText.replace("ipsum","london"); //it will replace only first occurence of word
result = MyText.replaceAll("ipsum","london"); //it will replace all the ipsum with london

//split method
var names = "ersin,hande,alex,john, jane";
result = MyText.split(" ");
result = names.split(",");

//slice method
result = MyText.slice(6,MyText.length-4);
result = MyText.toUpperCase();
result = MyText.toLowerCase();

var MyText2 = "                lorem         ipsum              "
//result = MyText2.trim().replaceAll(" ","")
result = MyText2.trim().slice(0,6).concat(MyText2.trim().slice(MyText2.length-35))

var MyNewText = "lorem ipsum dolor  brussel ipsum  BELGIUM sit  amet 1258766 "
result = MyNewText.match(/ipsum/)
result = MyNewText.match(/ipsum/g)

//console.log(MyText2)
console.log(result)