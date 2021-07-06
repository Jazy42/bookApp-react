import React, { useContext } from "react";
import Modal from "../Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtxt = useContext(CartContext);

  const totalAmount = `${cartCtxt.totalAmount}`;

  console.debug(cartCtxt);
  const cartItems = (
    <ul>
      {cartCtxt.items.map((item) => {
        return (
          <>
            <li>
              <b>{item.title}</b>
              <div>{item.description}</div>
            </li>
          </>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total amount</span>
      </div>
      <div>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
