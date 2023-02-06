import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {reducer } from "../reducer/UseReducer.js";

import { BASE_URL } from "../Helpers/Base-url.js";
const AppContext = createContext()
const API = 'http://localhost:4000/product'

const initialstate1={
    isLoading:false,
    isError:false,
    products:[],
    feature:[],
    isSingleLoading: false,
    SingleProduct:{}
}

 const AppProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,initialstate1)
    
     
    //API CALL FOR ALL RPODUCTS
    const getProducts= async()=>{
        //dispatch({type:'SET_LOADING'})
        try{
            let res = await fetch(`${BASE_URL}/product`)
            let products = await res.json()
            dispatch({type:"MY_API_DATA",payload:products})
        }catch(err){
           dispatch({type:'API_ERROR'})
        }
       
        }
           
//API CALL FOR SINGLE PRODUCT
const getSingleProduct= async(url)=>{
    try{
        let res = await fetch(url)
        let oneProduct = await res.json()
        dispatch({type:"SET_SINGLE_PRODUCT",payload:oneProduct})
        console.log('dekhlo singledata',oneProduct)

        
    }catch(err){
        console.log('singleproduct not running')
    }

    }

        

    useEffect(()=>{
       getProducts()
    },[])
    return (
    <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
    </AppContext.Provider>
    )
}

//custom hooks
const useProductContext=()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext,useProductContext}