import { createContext, useEffect, useReducer } from "react";
import { initialstate, reducer } from "../reducer/UseReducer";


const AppContext = createContext()
const API = 'http://localhost:4000/product'

const initialstate2={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[]
}

 const AppProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,initialstate)

    const getProducts= async()=>{
        dispatch({type:'SET_LOADING'})
        try{
            let response = await fetch('http://localhost:4000/product')
            let data = await response.json()
            console.log('dekhlo data',data)
            dispatch({type:'MY_API_DATA',payload:data})
        }catch(err){
            dispatch({type:'API_ERROR'})
        }
       


    }

    useEffect(()=>{
       getProducts()
    },[])
    return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
    )
}

export {AppProvider, AppContext}