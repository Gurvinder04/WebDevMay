import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducer/UseReducer';


const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initial);

  const initial = {
    loggedin:false,
    loggedUser:{}
  }
  

  const auth=async(logged)=>{
    console.log('authentication',logged)
    //dispatch({type:"USER",payload:{logged}})
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