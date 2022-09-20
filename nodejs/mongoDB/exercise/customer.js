const mongoose = require('mongoose');
var prompt = require('prompt');  //npm i prompt

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/CustomerData');
}

const customerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        lowercase:true
    },
    email: String,
    phone: Number,
    address: String,
    website: String
})

const Customer = mongoose.model('customer', customerSchema)



//email validation
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

//user validation
// function isCustomerExist(fullname) {
//     return Customer.exists({
//         fullname: fullname.toLowerCase()
//     })
//         .then(res => res)
// }

function isCustomerExist(checkcustomer) {
    let count =0
    return Customer.exists({
        fullname: checkcustomer.fullname.toLowerCase(),
        email: checkcustomer.email,
        phone: checkcustomer.phone,
        address: checkcustomer.address,
        website: checkcustomer.website
        
    })
        .then(res =>{
            count++
            console.log(count)
        })
}

prompt.start();

function AddCustomer() {
    prompt.get(['fullname', 'email', 'phone', 'address', 'website'], (err, customer) => {
        console.log(customer)
        const customerObj = new Customer(customer)
        isCustomerExist(customerObj)
            .then(customerobj => {
                customerobj === null ?
                    EmailValidation(customer.email) ?
                        customerObj.save()
                            .then(data => console.log('New customer added'))
                        :
                        console.log('Please enter valid email')
                    :
                    console.log('fullname is not available')
                setTimeout(() => console.clear(), 2000)    //clear console after 2 seconds
            })
            .finally(() => setTimeout(() => Menu(), 2000))   //shows the menu after 2 sec

    })

}

function UpdateCustomerData(){
    prompt.get(['fullname', 'email', 'phone', 'address', 'website'], (err, customer) => {
        console.log(customer)
    })
}

function GetCustomer(){
    Customer.find({})
        .then(data=>{
            data.forEach(customer=>{
              console.table({
                fullname:customer.fullname,
                email:customer.email,
                phone:customer.phone,
                address:customer.address,
                website:customer.website
              })
            })
           
        })
         .finally(() => {
            // setTimeout(() =>{
            //     console.clear()
            //     Menu()
            // }, 2000)
            console.log('Press 0 to return to menu')
            prompt.get(['return'],(err,choice)=>{
                if(choice.return === '0'){
                   console.clear()
                   Menu()
                }
            })
        })
    
}


function DeleteCustomer(delname){
    // prompt.get(['fullname'],(err,customer)=>{
    //     isCustomerExist(customer.fullname)
    //     .then(fullname=>{
    //         fullname !==null ?
    //         Customer.findOneAndDelete({
    //             fullname:customer.fullname
    //         })
    //         .then(()=>console.log(`${fullname} is deleted`))
    //         :
    //         console.log('customer doesn"t exist')
    //     })
    //     .finally(()=>{
    //         setTimeout(()=>{
    //             console.clear()
    //             Menu()
    //         },3000)
    //     })
    // })


    Customer.findOneAndDelete({
                    fullname:delname
                })
                .then(()=>console.log(`${fullname} is deleted`))
                console.log('customer doesn"t exist')
            
}

function Menu() {
    console.log(`
+-+-+-+-+-+-+-+-+-+
|g|u|r|v|i|n|d|e|r|
+-+-+-+-+-+-+-+-+-+
                                  
    `)
    console.log(`
     1. Add Customer
     2. Update Customer
     3. Delete Customer
     4. Get All Customer
     5. Exist
    `)
    prompt.get(['option'], (err, opt) => {
        switch (opt.option) {
            case '1':
                // console.log('Add Customer')
                AddCustomer()
                break;
            case '2':
                // console.log('Update Customer')
                prompt.get(['fullname'],(err,customer)=>{
                    Customer.find({fullname:customer.fullname})
                    .then(res=>res.length>0)
                    .then(bool=>{
                        if(bool){
                            UpdateCustomerData()
                        }
                       
                    })
                
                })
                
                break;
            case '3':
                prompt.get(['fullname'],(err,customer)=>{
                    Customer.find({fullname:customer.fullname})
                    .then(res=>{
                        console.log(`There exist ${res.length} customers.please enter email address for further clarification`)
                        if(res.length>1){
                            prompt.get(['email'],(err,customer)=>{
                                Customer.find({email:customer.email})
                                .then(res=>{
                                    console.log(res)
                                    DeleteCustomer(customer.fullname)
                                })
                            })
                        }
                        else{
                           DeleteCustomer()
                        }
                        
                    })
                    
                    
                
                })
                break;
            case '4':
                GetCustomer()
                break;
            case '5':
                console.log('Existing....')
                process.exit()
            default:
                console.log('please enter correct choice')
                Menu()
        }
    })
}

Menu()