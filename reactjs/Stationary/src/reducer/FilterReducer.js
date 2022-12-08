export const reducer=(state,action)=>{

    switch(action.type){
        case "FILTER_PRODUCTS":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload]
            }
            break;
         case "SEARCHED_VALUE":
                const {name,value} =action.payload
                        return{
                            ...state,
                            filters:{
                                ...state.filters,
                            [name]:value
                            }  
                        }
             break;
         case "SEARCHED_PRODUCTS":
            let {all_products} = state
            let tempsearched = [...all_products]

            const {text,category} = state.filters

            if(text){
                tempsearched = tempsearched.filter((curElem)=>{
                    return curElem.productname.toLowerCase().includes(text)
                })
            }

            if(category !=="all"){
                tempsearched = tempsearched.filter((curElem)=>{
                    return curElem.category===category
                })
             }

            return{
                ...state,
                filter_products:tempsearched
            }
            break;
         case "":
            break;
        default:
            return state
    }

}