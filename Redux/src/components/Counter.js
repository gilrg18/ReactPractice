import { useSelector, useDispatch } from "react-redux";
//useSelector hook from react-redux to use the store
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  //useSelector receives the state managed by redux and returns the part of the state that we want to extract
  //react redux will automatically set up a subscription for this component
  //this component will rerender everytime state.counter changes
  const myCounter = useSelector((state) => state.counter.counter);
  const show = useSelector(state=> state.counter.showCounter); //you can have as many useSelectors as u want
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch({ type: "increase" , qty: 5});
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
   // dispatch({type:'toggle'})
   dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && myCounter}.</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return{
//     //keys are prop names which we can use in the component
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// //connect is an alternative to useSelector and useDispatch (equivalent for class components)