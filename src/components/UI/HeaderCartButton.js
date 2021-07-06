import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtxt = useContext(CartContext);

  const noOfCartItems = cartCtxt.items.length;

  return (
    <button onClick={props.onClick}>
      <span>Your cart</span>
      <span>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
