//var username = "admin";  //re declare variable
//     username = "joe"; //updated

    //     console.log("hello friend")
    //     console.log(username);

    //     const company = "google"; 
    //     //const company = "facebook"; //give error
    //     //company = "facebook"; // cant update
    //     console.log(company);


    //     let website  = "www.google.com";
    //    // let website  = "www.facebook.com";// error cant redeclare
    //    website  = "www.facebook.com"; //updated


    //     console.log(website);
      
    //     /*
    //     var keyword=redeclare and updated variable.you can use same variable name with different value
    //     const keyword= not redeclareable not updatable.it give error if u update it 
    //     let keyword= not redeclareble but can be updated
    //     */

   

   var number1 = 10;
   var number2 = 20;
   var total = number1 + number2;
   var total = 10+20;
   var total = 10 + "20";
   var country = "Bru" + "ssel"
   

   console.log(total);
   console.log(country);

   document.getElementById("message").innerText = "Hello friend";
   document.getElementById("container").innerHTML = "<h1>container</h2>";

   var height = 100;
   var weight = 200;
   /*var multi = height*height;*/
   var bmi = weight/(height*height);

   /*console.log(multi);*/
   console.log(bmi);

   var bruto = 3000;
   var percent = 21; 
   var tax = (bruto*percent)/100;
   var netto = bruto-tax;
   console.log(netto);

   // single line comment
   /*multi line*/

   /*
    arthimetic operations
    add,sub,multi,div
   */

    let result;
    result = 7+3
    result = "a" + "b";
    result = 7-3;
    result += 2; //result = result+2
    result -= 1; //result = result-2

    result = 5*5;
    result *= 2; // result = result*2

    result = 50/2;
    result /= 5; // result = result/5


    // increase and decrease
    result++;
    result++;
    ++result;

    result--;
    --result;


    /*let firstname ="Gurvinder";
    let lastname ="kaur";
    result = firstname +" " + lastname;*/

    var n1 = 5;
    var n2 = 5;
    var n3 = 6;
    var n4 = "5";
    // equal to operator==
    result = n1 == n2
    result = n1 == n3
    result = n1 == n4 // bcoz the value is same although they are of different data type.

    // equal to operator===
    result = n1 === n4 // now check the both datatype and value.
    result = "spacex" === "spacex"
    result = "Spacex" === "spacex" // bcoz S is capital.

    result = "😇" == "😇"
    result = "😇 " == "😇" //bcoz of extra space in first emoji.

    //variable name cant start with special character,emoji x_emoji but with underscore wel.

     result = n1 !=n2 
     result = n1 !=n4 
     result = "😇" !="abc" 
     result = n1 !==n4 // check data type and value.

     var x1; var x2; // undefined
     result = x1 == x2 // undefined=undefined


     //greater than operator
      result = n1>n2 // ans is false
      result = n3>n1
      result = n3>n4

      //less than operator
      result = n3<n4
      result = n4<n3

      // greater than or equal to operator
      result = n1>=n2 // ans is true
      //result = n1>==n4 not possible

       // less than or equal to operator
       result = n1<=n3 
       //result = n1<==n4 not possible

       //ternry operator
       result = n1<=n4 ? "correct": "Incorrect";
       result = n1>=n3 ? "correct": "Incorrect";

    console.log(result + "😇 ");
    
    /*var student = "john";
    var age =24
     result = age>=18 ? "Alcohol is allowed": "Alcohol is not allowed";
     console.log(result+ " " + "to" + " " +student);*/

     var student = "john";
    var age =14
    var studentMoney = 10;
     result = age>=18 ? "Alcohol is allowed": "Alcohol is not allowed";
     console.log(result+ " " + "to" + " " +student);

   var myRule = age>=18;
   var mySecondRule = n3<=n1;
   var successMessage = "license is allowed";
   var errorMessage = "license is not allowed";
   //result = myRule ? successMessage: errorMessage;
   //result = myRule ? `${student} is allowed`: `${student} is not allowed`;
   //result = myRule ? student + " is allowed": student + " is not allowed";
   

   //console.log(result+ " " + "to" + " " +student);

   //logical operator AND  &&
   result = myRule && mySecondRule; //true and false

   var studentRule1 = age>=18;
   var studentRule2 = studentMoney >=1;
   var GetResult = studentRule1 && studentRule2;
    result = GetResult ? "yes he have ":"no he need money";
    result = GetResult ? 
    (studentRule2) ?
    "yes he have "
    :
    "no he need money"
    :
    "no he is underage";
   console.log(result);



   //PRACTICE
   /*var student1 = "Ram";
   var age1 = "20";
   var student2 = "sham";
   var age2 = "25";
   var student3 = "Ram";
   var age3 = "20";
   
   var rule1 = student1===student3;
   var rule2 = age1==age3;
   //result = rule1 ? (rule2) ?"Duplicate enteries":"No duplicate enteries":"No duplicate enteries";
   result = rule1 && rule2 ? "Duplicate enteries of " + student1 :"No duplicate enteries";
   console.log(result);*/

  
  


   

   

   



   


