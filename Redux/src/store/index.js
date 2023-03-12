import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//Creating this to avoid typo problems in the future
export const INCREMENT = 'increment';

//preparing a slice of our global state
//we can create different slices in different files to make our code maintainable
createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state){
      //we shouldnt manipulate the state directly like this but redux toolkit takes care of it and allows it
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.qty;
    },
    toggle(state){
      state.showCounter = !state.showCounter;
    },
  }
});

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
    //redux dont merge the new state with the existing state, it overwrites (replaces) it
    //so we have to tell redux to create every propery of the state otherwise it will delete
    //in this case showCounter if we dont add it to the new state
    //We must always set all pieces of state when we update a piece of state

    //state.counter++
    //return state;
    //this works but you should NEVER mutate exisiting state, this could lead to bugs and unpredictable behaviour
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.qty,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
