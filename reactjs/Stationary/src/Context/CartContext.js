import { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducer/UseReducer.js'
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

    const AddCart=(product)=>{
       dispatch({type:"ADD_TO_CART",payload:{product}})
    }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})

    }
    return( 
    <CartContext.Provider value={{...state,AddCart,removeItem}}>
        {children}
    </CartContext.Provider>
    )
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext};