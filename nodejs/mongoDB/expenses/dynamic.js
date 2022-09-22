const mongoose = require('mongoose');
const { get } = require('prompt');
var prompt = require('prompt');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/CustomerData')

}

const budgetSchema = new mongoose.Schema({
    MONTH: String,
    INCOME: Number,
    GROCERY: Number,
    BILLS: Number,
    OTHER: Number,
    BUDGET: { type: Number, default: 0 },
   
})

const expenses_2 = mongoose.model('expenses_2', budgetSchema)

prompt.start();

function NewBudget() {
    prompt.get(['INCOME', 'GROCERY', 'BILLS', 'OTHER'], (err, data) => {
        console.log(data)
        let obj = data
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        obj.MONTH = months[d.getMonth()];
        obj.BUDGET = CalculateBudget(obj)
        console.log(`you saved this month:${obj.BUDGET}`)
        const budget = new expenses_2(obj)
        budget.save()
            .then(res => console.log(res))
            .finally(() => {
                setTimeout(() =>{
                    console.clear()
                    BudgetMenu()
                }, 2000)
            })
})

}

function CalculateBudget(prop) {
   return  prop.BUDGET = prop.INCOME - prop.GROCERY - prop.BILLS - prop.OTHER;
//    console.log(`You saved this month ${prop.BUDGET}`)
}


function UpdateBudget(targetMonth) {
    prompt.get(['INCOME', 'GROCERY', 'BILLS', 'OTHER'], (err, newBudget) => {
        console.log(newBudget)
        newBudget.BUDGET = CalculateBudget(newBudget)
        console.log(`you saved this month:${newBudget.BUDGET}`)
        expenses_2.updateOne({MONTH:targetMonth},{$set:newBudget})
            .then(res => console.log(res))
            .finally(() => {
                console.log('To return menu press 0')
                prompt.get(['return'], (err, value) => {
                    if (value.return === '0') {
                        console.clear()
                        BudgetMenu()
                    }
                })
            })
    })



}

function BudgetHistory() {
    let totalIncome = 0;
    let totalBudget = 0;
    let totalExpenses = 0;
    expenses_2.find({})
        .then(res => {
            res.forEach(data => {
                console.table({
                    MONTH: data.MONTH,
                    INCOME: data.INCOME,
                    GROCERY: data.GROCERY,
                    BILLS: data.BILLS,
                    OTHER: data.OTHER,
                    BUDGET: data.BUDGET
                })
                totalIncome = totalIncome+data.INCOME
                totalBudget = totalBudget +data.BUDGET
                totalExpenses = totalExpenses+data.GROCERY+data.BILLS+data.OTHER
            })
            console.log(`Total Income:${totalIncome}`)
            console.log(`Total Expenses:${totalExpenses}`)
            console.log(`Total Savings:${totalBudget}`)
        })
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, value) => {
                if (value.return === '0') {
                    console.clear()
                    BudgetMenu()
                }
            })
        })

}

function TotalSavings(){
    let totalIncome = 0;
    let totalBudget = 0;
    let totalExpenses = 0;
    expenses_2.find({})
    .then(res=>{
        res.forEach(item=>{
            totalIncome = totalIncome+item.INCOME
            totalBudget = totalBudget +item.BUDGET
            totalExpenses = totalExpenses+item.GROCERY+item.BILLS+item.OTHER
        })
        console.log(`Total Income:${totalIncome}`)
        console.log(`Total Expenses:${totalExpenses}`)
        console.log(`Total Savings:${totalBudget}`)
    })
}

function BudgetMenu() {
    console.log(`
+-+-+-+-+-+-+-+-+-+
|g|u|r|v|i|n|d|e|r|
+-+-+-+-+-+-+-+-+-+
                                  
    `)
    console.log(`
     1. New Budget
     2. Update Budget
     3. Previous Budget
     4. Total Savings
     5. Exit
    `)
    prompt.get(['option'], (err, opt) => {
        switch (opt.option) {
            case '1':
                NewBudget()
                break;
            case '2':
                prompt.get(['MONTH'],(err,data)=>{
                    expenses_2.find({MONTH:data.MONTH})
                    .then(res=>{
                        UpdateBudget(data.MONTH)
                    })

                })
                break;
            case '3':
                BudgetHistory()
                break;
            case '4':
                TotalSavings()
                break;
            case '5':
                console.log('Exiting....')
                process.exit()
            default:
                console.log('please enter correct choice')
                BudgetMenu()
        }
    })
}

BudgetMenu()