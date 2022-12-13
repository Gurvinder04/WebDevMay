import React, { createContext, useContext,useEffect,useReducer } from 'react'
import { reducer } from '../reducer/FilterReducer.js'
import { useProductContext } from './ProductContext.js'

const FilterContext = createContext()
const initialstate = {
    filter_products:[],
    all_products:[],
    filters:{
        text: "",
        category:"all",
        price:''
    }

}

export const FilterContextProvider=({children})=>{
   const {products} = useProductContext()
    const [state,dispatch] = useReducer(reducer,initialstate)

    const searchValue=(event)=>{
        let name = event.target.name
        let value = event.target.value
        console.log(value)
        return dispatch({type:'SEARCHED_VALUE',payload:{name,value}})

    }

    // const CategoryFilter =async()=>{
    //     let response = await fetch(`http://localhost:4000/detail/${cat}`)
    //     let data = await response.json()
    //     console.log(data)
    // }

    useEffect(()=>{
        dispatch({type:'FILTER_PRODUCTS',payload:products})
        dispatch({type:'SEARCHED_PRODUCTS'})
    },[products,state.filters])
   
return( 
    <FilterContext.Provider value={{...state,searchValue}}>
        {children}
    </FilterContext.Provider>
    )
}

   export const useFilterContext =()=>{
        return useContext(FilterContext)
    }

   