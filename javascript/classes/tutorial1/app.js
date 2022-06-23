//javascript class


/*function App(username){
    this.username = username;   //function we used and in func we use protoype
}*/


class App{
    constructor(username){
         this.username = username;  //class we are using instead of function
         this.users=[];              //always define variable for local scope
         this.test = function(){     //u cant define here function without assinging a variable to it
            return "function in constructor";
         }
    }

    getUserName(){
        return this.username;  //creating method istead of using protype
    }
    
    getUsers(){
        return this.users;
    }
    addUser(){
        return this.users.push(this.username);
    }
    toString(){
        return this.getUserName() + " " + App.getCity();  //within class static mthod is accessible
    }


    static getCity(){  //static method is not directly accesible,so access it with class name;
        return "brussels";
    }
}

let app = new App('raj');
console.log(typeof App)  //Ans is function
console.log(app.getUserName());
console.log(app.toString());
app.addUser();
console.log(app.getUsers());
console.log(App.getCity());
console.log(app.test());