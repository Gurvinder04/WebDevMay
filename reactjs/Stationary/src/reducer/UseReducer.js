import { init } from "aos";


//export const initialstate = false

export const reducer=(state,action)=>{
if(action.type==="USER"){
    const check = action.payload
    return {
        ...state,
        loggedin:true,
        loggedUser:check._id       
}

}

if(action.type==="USER_LOGOUT"){
    return {
        ...state,
        loggedin:action.payload,
        loggedUser:""       
}

}

    if(action.type==="SET_LOADING"){
        return {
            ...state,
            isLoading:true
        }
    }
    if(action.type==="MY_API_DATA"){
        const featureData = action.payload.filter((curr)=>{
            return curr.feature===true  
         })
         console.log('featuring',featureData)
        return{
            ...state,
            isLoading:false,
            products:action.payload,
            feature:featureData
        }

    } 
   
    
    if(action.type==="MY_API_ERROR"){
        return {
            ...state,
            isLoading:false,
            isError:true
        }
    }
        
if(action.type==="SET_SINGLE_PRODUCT"){
    return{
        ...state,
        SingleProduct:action.payload
    }
}



if(action.type==="ADD_TO_CART"){
//     let {amount,product} = action.payload
//     console.log('amount is',amount)
//    const cartProduct={
//         id:product._id,
//         name: product.productname,
//         price:product.price,
//         quantity:amount
//     }

let {amount,product} = action.payload
if(amount == undefined){
     amount = 1
}
else{
    amount = action.payload.amount
}
console.log('amount is',amount)
const cartProduct={
    id:product._id,
    name: product.productname,
    price:product.price,
    quantity:amount
}

    return{
        ...state,
        cart:[...state.cart,cartProduct]
    }

}

if(action.type==="REMOVE_ITEM"){
    let updatedcart = state.cart.filter((curitem)=>curitem.id !== action.payload)
    return{
        ...state,
        cart:updatedcart,
    }

}

if(action.type==="CLEAR_CART"){
    return{
        ...state,
        cart:[]
    }
}

if(action.type==="CART_TOTAL_PRICE"){
    let total_price = state.cart.reduce((initalval,curElem)=>{
        let {price,quantity} = curElem

        initalval = initalval + price*quantity;
        console.log(initalval)
        return initalval
    },0)
    return{
        ...state,
        total_price
    }
}


return state;
}




