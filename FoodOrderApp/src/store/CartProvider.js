import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//reducer function goes outside of the component because it doesnt need any data from it
//state is the last state snapshot of the state managed by the reducer
const cartReducer = (state, action) => {
  if (action.type === "ADD"){
    //concat returns a total new array, different from push which works with the current array
    //which is better for react because of how state works
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
        items:updatedItems,
        totalAmount: updatedTotalAmount
    };
  }
    //return a new state snapshot
    return defaultCartState;
};

const CartProvider = (props) => {
  //useReducer(point at the reducer function, set an initial state)
  //use reducer returns an array with two elements [state snapshot, function to dispatch (enviar) an action to the reducer]
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item }); //you can name the variables whatever you want fe: identifier: 'ADD'
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
