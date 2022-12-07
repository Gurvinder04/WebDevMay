import React, { createContext, useContext,useEffect,useReducer } from 'react'
import { reducer } from '../reducer/UseReducer.js'

const FilterContext = createContext()


export const FilterContextProvider=({children})=>{
    const initialstate = {
        filter_Products:[],
        filters:{
            text: "",
        }
    
    }
    const [state,dispatch] = useReducer(reducer,initialstate)

    const searchValue=(event)=>{
        let name = event.target.name
        let value = event.target.value
        return dispatch({type:'SEARCHED_VALUE',payload:{name,value}})

    }

    useEffect(()=>{
        dispatch({type:'FILTER_PRODUCTS'})

    },[state.filters])
   
return( 
    <FilterContext.Provider value={{...state,searchValue}}>
        {children}
    </FilterContext.Provider>
    )
}

   export const useFilterContext =()=>{
        return useContext(FilterContext)
    }

   