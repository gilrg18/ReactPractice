import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      {/*since its a class name with a dash (-) we have to access it like this classes[main-image] */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
