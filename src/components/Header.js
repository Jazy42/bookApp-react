import React from "react";
import HeaderCartButton from "./UI/HeaderCartButton";

const Header = (props) => {
  console.info(props);
  return <HeaderCartButton onClick={props.onShowCart} />;
};

export default Header;
