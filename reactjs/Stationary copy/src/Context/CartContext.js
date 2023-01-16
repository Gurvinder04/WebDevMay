import { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducer/UseReducer.js'
//import { UserContext } from './App'

const CartContext = createContext()

const getLocalCart=()=>{
    let newCart = localStorage.getItem("customercart");
    if(newCart ===[]){
        return []
    }
    else{
         let cartData =JSON.parse(newCart)
         return cartData
    }
}

const CartProvider=({children})=>{
    const initialstate1 = {
        //cart:[],
        cart:getLocalCart(),
        total_items:"",
        total_price:"",
        shipping_fee:50

    }
    const [state,dispatch] = useReducer(reducer,initialstate1)

    const addToCart=(amount,product)=>{
       dispatch({type:"ADD_TO_CART",payload:{amount,product}})
    }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})

    }

 //to clear cart
 const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
 }

    
    
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_PRICE"})
         //Local storage for cart
    localStorage.setItem("customercart",JSON.stringify(state.cart))

    },[state.cart])
   
    return( 
    <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>
        {children}
    </CartContext.Provider>
    )
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext};