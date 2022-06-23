 //calculator with classes
 
 /*class Calculator{
    constructor(n1,n2){
      this.result=0;
       this.n1=n1;
       this.n2=n2;
        /*this.result = function(s){
            console.log("Result is:",s);
        }*/

    
    //Addition
    /*addition(){      
       return this.result=this.n1 + this.n2;
    }
    //Subtraction
    subtraction(){ 
       return this.result=this.n1 + this.n2;
    }
    //Multiplication
    multiply(){
       return this.result=this.n1 + this.n2;
    }
    //Division
    divide(){
      return this.result=this.n1 + this.n2;
    }

    toString(){
        console.log(`Result is: ${this.result}`);
    }
 }*/

 //let sum = new Calculator(4,5);
 /*sum.addition(4,5);
 sum.subtraction(4,5);
 sum.multiply(4,5);
 sum.divide(4,5);*/
 //sum.final(result);

 /*sum.addition();
 sum.subtraction();
 sum.multiply();
 sum.divide();
 sum.toString();*/
 

 class Calculator{
    constructor(number1,number2,operator){
        this.result=0;
        this.number1=number1;
        this.number2=number2;
        this.operator=operator;
    }

  GetResult(){                     // GetResult(opeator)
    switch(this.operator){           //this.operator=operator,switch(operator),if u want to perform diff operation on same number
        case '+':
            this.result = this.number1 + this.number2;
           break;
        case '-':
            this.result = this.number1 - this.number2;
            break;
        case '*':
            this.result = this.number1 * this.number2;
            break;
        case '/':
            this.result = this.number1 / this.number2;
            break;
        default:
            console.log("Enter correct operator");
    }
 }

  toString(){
    console.log(`${this.number1} ${this.operator} ${this.number2} = ${this.result}`)
 }
}

let num1 = new Calculator(19,7,'+');
num1.GetResult();
num1.toString();

/*let num2 = new Calculator(4,5)    //if u want to perform diff operation on same number
 num2.GetResult('-');
 num2.toString();*/

