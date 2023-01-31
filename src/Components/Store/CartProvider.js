// import CartContext from "./Cart-context"
import React from "react";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount:0
};

const cartReducer = (state, action ) => {
    if (action.type === 'ADD') {
        
        const updateTotalAmount=state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex =state.items.findIndex((item)=> item.id === action.item.id);
        const existingCartItem= state.items[existingCartItemIndex];
        let updateItems;

        if(existingCartItem){
            const updateItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            };
            updateItems= [...state.items];
            updateItems[existingCartItemIndex]= updateItem;
        }
        else {
            updateItems=state.items.concat(action.item);
        }
       
        return{
            items:updateItems,
            totalAmount:updateTotalAmount
        };
    }
    if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
        (item)=> item.id === action.id   
    );
        const exstingItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - exstingItem.price;
        let updateItems;
        if (exstingItem.amount === 1) {
            updateItems = state.items.filter(item => item.id !== action.id );

        }else {
            const updateItem = {...exstingItem, amount:exstingItem.amount -1};
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        }
        return {
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