var student = {
    name: 'john',
    age: 30,
      isAdmin:false,
      courses:['html','css','java'],
      address:{
        city: 'brussel',
        stret: 'truilingen',
      }
    }

    const student1 ={
        x:'john',
        y:30,
        z:false
    }
    

   //console.log("Result",student[isAdmin])

   function UpdateData(obj,key,newValue){
    return obj[key] = newValue;
   }
  

UpdateData(student,'address',{city:'leuven',street:'kerkom'})
UpdateData(student,'x','joe dalton')
console.log(student1)

//for in
for(var key in student){
    console.log(student[key])
    if(key === 'address'){
        for(var key2 in student[key]){
            console.log(student[key][key2])
        }
    }
}


function UpdateObjectData(obj,key,newValue){

}


//for of
/*for(var key of Object.enteries (student)){
    console.log(key)
}*/

for(var key of Object.keys(student)){
    console.log(key)
    console.log(student[key])
}

//console.log(Object.enteries(student)[0][1])   //show key and its value
//console.log(object.keys(student))   //shows only keys