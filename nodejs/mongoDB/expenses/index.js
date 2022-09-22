const mongoose = require('mongoose');
var prompt = require('prompt');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/CustomerData')

}

const ExpensesSchema =new mongoose.Schema({
          INCOME:Number,
          GROCERY:Number,
          BILLS:Number,
          OTHER:Number,
          BUDGET:{ type: Number, default: 0 }
})

const Expenses = mongoose.model('Expenses',ExpensesSchema)

prompt.start();

prompt.get(['INCOME','GROCERY','BILLS','OTHER'],(err,prop)=>{
    if(prop.INCOME !== null){
        Calculate(prop)
    }
//     const budget = new Expenses(data)
//     if(budget.INCOME !== null){
//         budget.BUDGET = Calculate(budget)
//         budget.save()
//         .then(res=>console.log(res))
        
//     }
//     else{
//         console.log('please enter your income')
//     }
 })

function Calculate(data){
    data.BUDGET = data.INCOME-data.GROCERY-data.BILLS-data.OTHER;
    console.log(`Your saved this month ${data.BUDGET}`)
    const budget = new Expenses(data)
    budget.save()
    .then(res=>console.log(res))

}

