

export const initialstate = false

export const reducer=(state,action)=>{
if(action.type==="USER"){
    return action.payload;
}

switch (action.type) {
    case "SET_LOADING":
        return {
            ...state,
            isLoading:true
        }
        break;
    case "MY_API_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true
        }
        break;

    case "My_API_DATA" :
        const featureData = action.payload.filter((curr)=>{
            return curr.featured === true
        })

        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData
        }
        
       
        break;
    case "ADD_TO_CART":
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
        break;
    
        case "REMOVE_ITEM":
            let updatedcart = state.cart.filter((curitem)=>curitem.id !== action.payload)
            return{
                ...state,
                cart:updatedcart,
            }
        break;
    
        case "SEARCHED_VALUE":
            const {name,value} =action.payload
            return{
                ...state,
                filters:{
                    ...state.filters,
                [name]:value
                }  
            }
            break;
       default:
         return state
}

return state;
}