const student={
    name :"quotes",
    age :25,
    education: "software devloper",
    projection:["Banana", "Orange", "Apple", "Mango"],
    /*print: function(){
        console.log("print function")
        console.log(this.name)
        console.log(this)*/

       print: ()=>{   //arrow function
            console.log("print function")
            console.log(this.name) //this keyword doesnt work  with arrow function
    }
}

const Tools ={
    bmicalc:function( weight,height){
        let bmi = weight/(height*height)
        console.log( `bmi result is ${bmi}`)
   },

   nettosalary:function( salary,tax){
    let netsalary = salary - (( salary*tax)/100)
    console.log( ` Net salary is ${netsalary}`)
   }

}
 Tools.bmicalc(75,1.75)
 Tools.nettosalary(1000,21)

 const PC = {
    screen:"Hp",
    keyboard:"qwerty",
    mouse:"",
    cpu:"",
    gpu:"",
    power: false,
    turnon: function(){
          PC.power = true; //update the boolean value
          console.log("computer is turning on....")
          console.log ( `
              name: ${PC.screen}
              keyboard : ${PC.keyboard}
          `)
    },

    turnoff: function(){
        PC.power = false;
        console.log("computer is turning off....")
  },


   switcher: function(){   //allternative way of doing it // update boolean value{toggle}
    PC.power = !PC.power; //if off than on

   },

  status: function(){
    //const computerstatus = PC.power ? "computer is runing....":"computer is off....";
    //console.log(computerstatus)
    console.log(PC.power ? "computer is runing....":"computer is off....")
}

 }

PC.turnon()
PC.status()

PC.turnoff()
PC.status()


//student.print()

/*var name = "joe"; //global scope

function LocalScope(){
    const name= "dalton";
    console.log(name)
}*/

function number1(){
    console.log(1)
    return 1  //if return not use than return NaN
}

function number2(){
    console.log(2)
    return 5
}

console.log(number1()+number2()) //if not use return in 1 and 2 than return NaN