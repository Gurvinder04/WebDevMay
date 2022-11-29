export const initialstate = false

export const reducer=(state,action)=>{
if(action.type==="USER"){
    return action.payload;
}

if(action.type==="ADD_TO_CART"){
    let {detail} = action.payload
    console.log('problem',detail)
}
return state;
}