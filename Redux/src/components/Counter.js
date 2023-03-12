import { useSelector } from "react-redux";
//useSelector hook from react-redux to use the store
import classes from "./Counter.module.css";

const Counter = () => {
  //useSelector receives the state managed by redux and returns the part of the state that we want to extract
  //react redux will automatically set up a subscription for this component
  //this component will rerender everytime state.counter changes
  const myCounter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{myCounter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
