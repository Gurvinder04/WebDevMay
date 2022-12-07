

export const initialstate = false

export const reducer=(state,action)=>{
if(action.type==="USER"){
    return action.payload;
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
        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData
        }

    } 
    
    if(action.type==="MY_API_ERROR"){
        return {
            ...state,
            isLoading:false,
            isError:true
        }
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

if(action.type==="SEARCHED_VALUE"){
    const {name,value} =action.payload
            return{
                ...state,
                filters:{
                    ...state.filters,
                [name]:value
                }  
            }
}
return state;
}




