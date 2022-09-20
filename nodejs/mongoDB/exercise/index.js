

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/CustomerData', (err) => {
        console.log('connected')
    });
}

const customerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        set:toLower
    },
    email: String,
    phone: Number,
    address: String,
    website: String
})

const customer = mongoose.model('customer', customerSchema)



const customerInfo = {
    fullname: 'Anvi',
    email: 'ridu23@gmail.com',
    phone: 8708834830,
    address: '1234 st piters',
    website: 'www.ridam.com'
}

// //email validation
function EmailValidation(email) {
    let domains = ['gmail.com', 'hotmail.com']


    let foundEmail = domains.filter(domain => domain === email.split('@')[1])
    if (foundEmail.length > 0) {
        return true
    }
    else {
        return false
    }

}

const customer1 = new customer(customerInfo)

// if (EmailValidation(customer1.email)) {
//     customer1.save()
//         .then(data => {
//             console.log(data,'saved')
//         })
// }
// else {
//     console.log("Please enter a valid email")
// }


//user validation
function isCustomerExist(fullname) {
   return customer.exists({
        fullname:fullname.toLowerCase()
    })
        .then(res=>res)
}

//add data
isCustomerExist(customer1.fullname)
    .then(res =>{
        if (res!==null){
            console.log('customer already exist')
        }
        else {
            if (EmailValidation(customer1.email)) {
                customer1.save()
                    .then(data => {
                        console.log(data, 'saved')
                    })
            }
            else {
                console.log("Please enter a valid email")
            }
        }
    })

//update data
// customer.findByIdAndUpdate('632984de8845f7c45e962735',{
//    email:'anvi25@gmail.com'
// })
// .then(data=>{
//     // if (EmailValidation(data.email)) {
//     //     data.save()
//     //         .then(data => data)
//     // }
//     // else {
//     //     console.log("Please enter a valid email")
//     // }
//     console.log(data,'updated')
// })



//delete data
//  customer.findByIdAndDelete('632984de8845f7c45e962735')
//  .then(data=>console.log(data,'deleted'))

//find data
// customer.find({
//     _id:'632984de8845f7c45e962735'
// }).then(data=>console.log(data))
