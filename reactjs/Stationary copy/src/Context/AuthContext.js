import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();

const initial = {
  isLoggedIn:false,
  loggedUser:"",
  
}

 const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);
  

  const authUser= (logged)=>{
    //console.log('authentication',logged)
    initial.loggedUser = logged._id
    //console.log('logged user vala',initial.loggedUser)
    dispatch({type:"USER",payload:logged})
   
  }

  const notAuthUser= ()=>{
    dispatch({type:"USER_LOGOUT",payload:false})
   
  }
 
  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ ...state,authUser,notAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hooks
 const useAuthContext=()=>{
  return useContext(AuthContext)
}

export {AuthProvider,useAuthContext};