import { createSlice, configureStore } from "@reduxjs/toolkit";

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
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//configureStore makes merging multiple reducers into one, easier
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

//alternitavely we can set a key(counter) to the reducer function(counterSlice.reducer)
//this is used when we have multiple reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

//before with redux you had to name your actions and call the reducer functions using dispatch functions with action.type
//now with redux toolkit you can just export and call your reducer functions using (in this case) counterActions.increment():
export const counterActions = counterSlice.caseReducers;
export const authActions = authSlice.actions;
export default store;
