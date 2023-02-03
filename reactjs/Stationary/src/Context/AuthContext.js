import React, { createContext, useContext, useEffect, useReducer,useState } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();

const initial = {
  isLoggedIn:false,
  loggedUser:""
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);
  const [checkToken,setcheckToken] =useState()

  
  

   const authUser= (logged)=>{
    //console.log('logged user vala',logged)
    dispatch({type:"USER",payload:logged})
   
   }

  const validateCheck=()=>{
    setcheckToken( localStorage.getItem("trytoken"))
    //console.log('checktoken id is',checkToken)
    dispatch({type:"CHECK_USER",payload:checkToken})
  }

  const notAuthUser= ()=>{
    localStorage.removeItem("trytoken")
    setcheckToken()
    //dispatch({type:"USER_LOGOUT",payload:false})
   
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