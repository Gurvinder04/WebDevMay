import { set } from 'mongoose';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();

const initial = {
  isLoggedIn:false,
  loggedUser:"",
  loggedCart:0,
  loggedCartItems:[]
  
}

 const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);
  const [checkToken,setcheckToken] =useState()
  const [cartAuth,setcartAuth] =useState([])
  
  
  
  

  const authUser= (logged)=>{
    //console.log('logged user vala',logged)
    initial.loggedCartItems=logged.usercart
    console.log('logged user vala cart',initial.loggedCartItems)
      let temp =[];
      temp.push(logged.usercart);
      console.log('temp is',temp)
    setcartAuth(temp)  
    dispatch({type:"USER",payload:logged})
  }
  console.log('new catAuth is',cartAuth)
  const notAuthUser= ()=>{
    localStorage.removeItem("trytoken")
    setcheckToken()
    //dispatch({type:"USER_LOGOUT",payload:checkToken})
   
  }
  const validateCheck=()=>{
    setcheckToken( localStorage.getItem("trytoken"))
    //console.log('checktoken id is',checkToken)
    dispatch({type:"CHECK_USER",payload:checkToken})
  }
 
  useEffect(() => {
     validateCheck()
  }, [checkToken]);

  return (
    <AuthContext.Provider value={{ ...state,authUser,notAuthUser,validateCheck,cartAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hooks
 const useAuthContext=()=>{
  return useContext(AuthContext)
}

export {AuthProvider,useAuthContext};