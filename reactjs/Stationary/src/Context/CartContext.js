import { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducer/UseReducer'
//import { UserContext } from './App'

const CartContext = createContext()

const CartProvider=({children})=>{
    const initialstate1 = {
        cart:[],
        total_items:"",
        total_amount:"",
        shipping_feee:5000

    }
    const [state,dispatch] = useReducer(reducer,initialstate1)

    const AddCart=(detail)=>{
       dispatch({type:"ADD_TO_CART",payload:{detail}})
    }
    return( 
    <CartContext.Provider value={{...state,AddCart}}>
        {children}
    </CartContext.Provider>
    )
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext};