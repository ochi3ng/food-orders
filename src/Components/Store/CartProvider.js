// import CartContext from "./Cart-context"
import React from "react";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount:0
};

const cartReducer = (state, action ) => {
    if (action.type === 'ADD') {
        const updateItems=state.items.concat(action.item);
        const updateTotalAmount=state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updateItems,
            totalAmount:updateTotalAmount
        };
    }
    return defaultCartState
};

export const CartContext = React.createContext(); 

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

const addItemToCartHandler = item =>{
    dispatchCartAction({type:'ADD',item:item});
    
};

const removeItemFromCartHandler = id =>{
dispatchCartAction({type:'REMOVE', id:id})
};

const value={ 
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler}

    
  return <CartContext.Provider value={value}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider