
  var student1 = "Ram";
  var age1 = "20";
  var student2 = "sham";
  var age2 = "25";
  var student3 = "Ram";
  var age3 = "20";
  
  var rule1 = student1===student3;
  var rule2 = age1==age3;
  //result = rule1 ? (rule2) ?"Duplicate enteries":"No duplicate enteries":"No duplicate enteries";
  result = rule1 && rule2 ? "Duplicate enteries of " + student1 :"No duplicate enteries";
  console.log(result);