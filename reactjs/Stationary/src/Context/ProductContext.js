import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {reducer } from "../reducer/UseReducer.js";


const AppContext = createContext()
const API = 'http://localhost:4000/product'

const initialstate1={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    SingleProduct:{}
}

 const AppProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,initialstate1)
    const[dataItems,setdataItems]=useState([])
     
    //API CALL FOR ALL RPODUCTS
    const getProducts= async()=>{
        //dispatch({type:'SET_LOADING'})
        try{
            let res = await fetch('http://localhost:4000/product')
            let data = await res.json()
            dispatch({type:"MY_API_DATA",payload:data})
            console.log('dekhlo data',data)
            setdataItems(data)
            console.log('dekhlo dataItems',dataItems)
            
        }catch(err){
           dispatch({type:'API_ERROR'})
        }

        }
           
//API CALL FOR SINGLE PRODUCT
const getSingleProduct= async(url)=>{
    try{
        let res = await fetch(url)
        let SingleProduct = await res.json()
        console.log('dekhlo singledata',SingleProduct)
        
    }catch(err){
      
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