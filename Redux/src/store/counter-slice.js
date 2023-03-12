import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

//preparing a slice of our global state
//we can create different slices in different files to make our code maintainable
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      //we shouldnt manipulate the state directly like this but redux toolkit takes care of it and allows it
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //action now has to use action.payload cause that is the name
      //of the property which will hold any extra data you are dispatching
      //before you could name it like action.qty or action.amount but that doesnt work now.
      //it has to be payload
      const sum =action.payload.reduce((result, x)=> result + x, 0);
      state.counter =
        state.counter + sum;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;