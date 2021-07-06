import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import CartContext from "../../store/cart-context";
const Book = (props) => {
  const cartCtx = useContext(CartContext);
  const clickHandler = () => {
    cartCtx.addItem({
      title: props.title,
      description: props.description,
    });
  };

  return (
    <ul>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <Button onClick={clickHandler}>Buy now</Button>;
    </ul>
  );
};

export default Book;
