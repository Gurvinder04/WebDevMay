import { createContext, useContext, useEffect, useReducer } from 'react'
import { BASE_URL } from '../Helpers/Base-url.js'
import { reducer } from '../reducer/UseReducer.js'
import { useAuthContext } from './AuthContext.js'
//import { UserContext } from './App'

const CartContext = createContext()

const initialstate1 = {
    cart:[],
    total_items:"",
    total_price:"",
    shipping_fee:50

}

const CartProvider=({children})=>{
   
    const [state,dispatch] = useReducer(reducer,initialstate1)
    const {loggedUser,loggedCart} = useAuthContext()


    const addToCart= async(amount,product)=>{
        console.log('click button',product)
          let checkUser = loggedUser
           console.log('check vali id', checkUser)
        let data = await fetch('/cart',{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              //'Access-Control-Allow-Origin': '*'
          },
          body:JSON.stringify({product,checkUser})
      })
      
      let res = await data.json()
      console.log('cart addded',res)
      if(res.status === 401){
       window.alert('U have to login')
      }
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

    },[state.cart,loggedUser])
   
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