import React, { useReducer } from "react";
import CartContext from "./cart-context";

//Action is dispatched by us while state is the last state snapshot.
const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    //concat returns a new array
    console.debug(state, action);
    const updatedItems = state.items.concat(action.forwardItem);
    // const updatedAmount = state.totalamount + action.forwardItem.totalamount;
    return {
      ...state,
      items: [...state.items, action.forwardItem],
    };
  }

  if (action.type === "REMOVE_ITEM") {
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      //forward the item on type of action
      forwardItem: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      forwardId: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
