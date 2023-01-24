import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();

const initial = {
  loggedin:false,
  loggedUser:""
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);

  
  

  const auth= (logged)=>{
    console.log('authentication',logged)
    initial.loggedUser = logged._id
    console.log('logged user vala',initial.loggedUser)
    dispatch({type:"USER",payload:logged})
   
  }
 
  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ ...state,auth }}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hooks
 const useAuthContext=()=>{
  return useContext(AuthContext)
}

export {AuthProvider,useAuthContext};