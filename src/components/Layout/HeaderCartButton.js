import { React, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const [isbtnActive, setIsBtnActive] = useState(false);

  const numberOfCartItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${isbtnActive ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setIsBtnActive(true);

    const timer = setTimeout(() => {
      setIsBtnActive(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
