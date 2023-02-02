import { set } from 'mongoose';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();

const initial = {
  isLoggedIn:false,
  loggedUser:"",
  
}

 const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);
  const [checkToken,setcheckToken] =useState()
  
  
  

  const authUser= (logged)=>{
    setcheckToken(logged)
    //console.log('authentication',logged)
    //initial.loggedUser = logged._id
    //console.log('logged user vala',initial.loggedUser)
    //dispatch({type:"USER",payload:logged})
    dispatch({type:"CHECK_USER",payload:checkToken})
   
  }

  const notAuthUser= ()=>{
    localStorage.removeItem("trytoken")
    setcheckToken()
    console.log('trygj',checkToken)
    //dispatch({type:"USER_LOGOUT",payload:checkToken})
   
  }
  const validateCheck=()=>{
    setcheckToken( localStorage.getItem("trytoken"))
    console.log('checktoken is',checkToken)
    dispatch({type:"CHECK_USER",payload:checkToken})
  }
 
  useEffect(() => {
     validateCheck()
  }, [checkToken]);

  return (
    <AuthContext.Provider value={{ ...state,authUser,notAuthUser,validateCheck}}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hooks
 const useAuthContext=()=>{
  return useContext(AuthContext)
}

export {AuthProvider,useAuthContext};