import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      {/*since its a class name with a dash (-) we have to access it like this classes[main-image] */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
