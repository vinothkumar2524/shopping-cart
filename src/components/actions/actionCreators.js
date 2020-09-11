import { ADD_TO_CART, REMOVE_ITEM,LOGIN, ADD_QUANTITY,SUB_QUANTITY } from './actionTypes'
import { CHANGE_CATEGORY } from './actionTypes'
console.log(" came to actioncreators  file");
export const addToCart= (id)=>{
    
    return{
        type: ADD_TO_CART,
         id }
    }
export const changeCategory = (category) =>
{
    return{
        type : CHANGE_CATEGORY,
        payLoad : category
    }
}
export const removeItem = (id)=>
{
    return{
        type:REMOVE_ITEM,
        id
    }
}
export const login = (userName) =>
{
    return{
        type:LOGIN,
        payLoad:userName
    }
}
export const addQuantity = (id) =>
{
    return{
        type : ADD_QUANTITY,
        id
    }
}
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}