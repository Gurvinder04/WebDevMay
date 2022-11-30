export const initialstate = false

export const reducer=(state,action)=>{
if(action.type==="USER"){
    return action.payload;
}

if(action.type==="ADD_TO_CART"){
    let {product} = action.payload
    //console.log('problem',product)
    let cartProduct;
    cartProduct={
        id:product._id,
        name: product.productname,
        price:product.price


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
return state;
}