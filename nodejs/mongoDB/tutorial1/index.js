//download mongo community server and select on custom option while dwnlding and also click on dwnld mongo compass during installing the mongo db
//than initalize the file with npm init -y
//then run command npm i mongoose and in cmd run comand mongo 
//if it doesn't work than install mongo shell and don't install it simply paste on desktop and then click and open folder and click on bin and then on mongo it open th shell.


// https://mongoosejs.com/docs
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
   await mongoose.connect('mongodb://localhost:27017', (err) => {
        if (err) {
            console.log('eror in connecting db')
        }
        else {
            console.log('connnected to db')
        }
    });

}
//create schema
const users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: String,
    age: Number,
    isAdmin: Boolean
})

//compile the schema to model
const Users = mongoose.model('Users', users)

//create a record
const user1 = {
    username:'root',
    password:'12345',
    age:18,
    isAdmin:true
}
const _user1 = new Users(user1);
   

//save it to db
// _user1.save()
// .then(res=>{
//     console.log(res,'saved')
// })

// Users.find({})
// .then(res=>{
//     console.log(res)  //all records
// })

//find by username
// Users.find({
// username:'joe'
// })
// .then(res=>{
//     console.log(res)  //all records

// })

//find by id and delete
// Users.findByIdAndDelete('63285d389a29fbbae98d9703')
// .then(res=>{
//     console.log(res,'record is deleted')  

// })

//deletemany
// Users.deleteMany({},(err)=>{
//     console.log('deleted')
// })


//save when username is unique
Users.findOne({           //to prevent duplication
    username:'root',
    password:'12345'
})
.then(user=>{
    console.log(user)
    if(user!==null){
        console.log('username exists')
    }
    else{
        console.log('username is available')
        //save user
        new Users({
            username:'gurvinder',
            password:'6789',
            age:40,
            isAdmin:true
        }).save().then((newUser)=>console.log(newUser))

    }
})