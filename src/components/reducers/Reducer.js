import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, LOGIN, CHANGE_CATEGORY } from '../actions/actionTypes'
import products from '../../products'
const initState = {
    items: products,
    isLoggedIn: false,
    loggedInUser: '',
    addedItems: [],
    total: 0,
    category: "Electronics"
}
const cartReducer = (state = initState, action) => {
    console.log("came to this bid reducer file");
    switch (action.type) {
        case ADD_TO_CART: {
            console.log("came to add to cart in reducer");
            let addedItem = state.items[state.category].find(item => item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }

            }
        }
            break;
        case REMOVE_ITEM: {
            console.log("came to removeitem in reducer");
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
            break;
        case ADD_QUANTITY: {
            console.log("came to add quantity in reducer");
            let addedItem = state.items[state.category].find(item => item.id === action.id)
            console.log("reached in reduer add quantity")
            addedItem.quantity += 1;
             let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
            break;

        case SUB_QUANTITY: {
            console.log("came to remove quantity in reducer");
            let addedItem = state.items[state.category].find(item => item.id === action.id)
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            }
        }
            break;
        case CHANGE_CATEGORY: console.log("came to changecategory in reducer");
        return {
            ...state,
            category: action.payLoad
        }

            break;
        case LOGIN: console.log("came to login in reducer");
        return {
            ...state,
            isLoggedIn: true,
            loggedInUser: action.payLoad
        }
            break;
        default: console.log("came to default in switch in reducer"); return state;
    }
}
export default cartReducer;