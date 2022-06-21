// prototype is property of object constructor it allows u to add new property to object constructor

/*function TwitterApplication(username,email,password){
          this.username = username;
          this.email = email;
          this.password = password;
          this.timeline = [];
}

TwitterApplication.prototype.showInfo = function(){
    console.log(`username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}\nAvatar: ${this.avatar}\nTweets: ${this.timeline}`);
}

TwitterApplication.prototype.updatePassword=function(newpassword){
     return this.password = newpassword;
}

TwitterApplication.prototype.sendTweet = function(tweet){
    return this.timeline.push(tweet);
}

TwitterApplication.prototype.deleteTweet = function(tweet){
    return this.timeline.pop(tweet);
}
TwitterApplication.prototype.avatar = "myavatar.jpg" //a

let user1 = new TwitterApplication('jack','jack@gmail.com','12456');
//console.log(user1);
user1.updatePassword('hello1245p');
user1.sendTweet('hello sabnu');  //sends tweet 
user1.sendTweet('moj krdi bete');
user1.showInfo();  //call showinfo

let user2 = new TwitterApplication('guru','guru16@gmail.com','145239');
user2.sendTweet('hor ki hal chal');
user2.showInfo();
user2.deleteTweet();

console.log(user2.timeline); //it gives array and to iterate through array we use loop

user2.timeline.forEach(function (tweet){
    console.log(tweet);   
})*/


function ToDoApplication(fname,lname,age,email){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.email = email
    this.visitedplaces =[];
}

ToDoApplication.prototype.addToDo = function(place){
    this.visitedplaces.push(place.toUpperCase());
}

ToDoApplication.prototype.deleteToDo= function(place){
    this.visitedplaces.pop(place);
}

ToDoApplication.prototype.updateToDo = function(update){
     this.age = update;
}

ToDoApplication.prototype.specificDelete = function(value){
    let index = this.visitedplaces.indexOf(value.toUpperCase());
    if(index>-1){
        console.log("Founded:",index,this.visitedplaces[index])
        this.visitedplaces.splice(index,1)
    }
}
ToDoApplication.prototype.display = function(){
    console.log(`Name: ${this.fname} ${this.lname}\nAge: ${this.age}\nEmail: ${this.email}\n VisitedPlaces: ${this.visitedplaces} `)

}

let member1 = new ToDoApplication('Raj','Kumar','25','raj10@gmail.com');
//member1.display();
member1.addToDo('Mumbai-Bombay');
member1.addToDo('Goa');
member1.addToDo('Shimla');
//member1.updateAge(15);
//member1.deleteToDo();
//member1.specificDelete('mumbai-bombay');
//member1.display();
//console.log(member1);


let data = new ToDoApplication('Gurvinder','Kaur','50','gkaur110@gmail.com')
data.addToDo('Mumbai-Bombay');
data.addToDo('Goa');
let input;
function performAction(value){
    let action = parseInt(prompt("Enter action you want to perform"));

    switch(action){
        case 1:
             input = prompt("Enter the place you want to add");
            data.addToDo(input)
            console.log(data.display());
            break;
        case 2:
            data.deleteToDo()
            console.log(data.display());
            break;
        case 3:
            console.log(data.display());
            break;
        case 4:
             input = parseInt(prompt("Enter the age"));
            data.updateToDo(input)
            console.log(data.display());
            break;
        case 5:
             input = prompt("Enter the place you want to delete");
            data.specificDelete(input)
            console.log(data.display());
            break;
        default:
            alert("Please enter valid input");
    }

}