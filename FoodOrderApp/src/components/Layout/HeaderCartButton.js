import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  //destructuring just the items from the context
  const { items } = cartCtx;
  //now this component will get reevaluated whenver the CartContext changes
  //it also changes when it gets updated in the CartProvider component
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    //create new timer
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); //300 miliseconds because thats the duration of the bump css class

    //cleanup function
    return () => {
      clearTimeout(timer); //clear old timer
      //console.log(items);
    };
  }, [items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
