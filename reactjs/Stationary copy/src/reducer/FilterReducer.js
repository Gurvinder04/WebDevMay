export const reducer=(state,action)=>{

    switch(action.type){
        case "FILTER_PRODUCTS":
            let PriceArr = action.payload.map((curElem)=>curElem.price)
            //console.log('pricing',PriceArr)
            // let maxPrice = PriceArr.reduce((initialval,curval)=>Math.max(initialval,curval),0)
            let maxPrice = Math.max(...PriceArr)
            //console.log('Maximum price is',maxPrice)
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{...state.filters,maxPrice,price:maxPrice}
               
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
            let {all_products} =state
            let tempsearched = [...all_products]

            const {text,category,price} = state.filters

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
             
             if(price === 0){
             tempsearched = tempsearched.filter((curElem)=> curElem.price === price)
                  
            }
             else{
                tempsearched = tempsearched.filter((curElem)=> curElem.price <= price)
             }

            return{
                ...state,
                filter_products:tempsearched
               
            }
            break;
         case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text: "",
                    category:"all",
                    maxPrice:0,
                    minPrice:state.filters.maxPrice,
                    price:state.filters.maxPrice
                }
            }

            break;
        default:
            return state
    }

}